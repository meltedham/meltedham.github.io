import { useEffect, useState, useRef } from 'react'

interface FairyLight {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  flickerPhase: number
  flickerSpeed: number
  opacity: number
}

interface TrailPoint {
  x: number
  y: number
  opacity: number
}

export default function FairyLights() {
  const [lightPositions, setLightPositions] = useState<FairyLight[]>([])
  const [trailPoints, setTrailPoints] = useState<TrailPoint[]>([])
  const lightsRef = useRef<FairyLight[]>([])
  const trailRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const lastTrailTimeRef = useRef(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Initialize lights
  useEffect(() => {
    const newLights: FairyLight[] = []

    for (let i = 0; i < 15; i++) {
      newLights.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 4 + 5,
        flickerPhase: Math.random() * Math.PI * 2,
        flickerSpeed: Math.random() * 0.03 + 0.01,
        opacity: (Math.random() * 0.5 + 0.5),
      })
    }

    lightsRef.current = newLights
    setLightPositions(newLights)
  }, [])

  // Mouse trail tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animate lights and trail
  useEffect(() => {
    let animationId: number

    const animate = () => {
      const now = performance.now()

      lightsRef.current = lightsRef.current.map((light) => {
        let newX = light.x + light.vx
        let newY = light.y + light.vy
        let newVx = light.vx
        let newVy = light.vy

        if (newX < 0 || newX > window.innerWidth) {
          newVx = -newVx * 0.9
          newX = Math.max(0, Math.min(window.innerWidth, newX))
        }
        if (newY < 0 || newY > window.innerHeight) {
          newVy = -newVy * 0.9
          newY = Math.max(0, Math.min(window.innerHeight, newY))
        }

        if (Math.random() < 0.01) {
          newVx = (Math.random() - 0.5) * 1
          newVy = (Math.random() - 0.5) * 1
        }

        const newPhase = light.flickerPhase + light.flickerSpeed
        const newOpacity = (Math.sin(newPhase) + 1) / 2 * 0.5 + 0.3

        return {
          ...light,
          x: newX,
          y: newY,
          vx: newVx,
          vy: newVy,
          opacity: newOpacity,
          flickerPhase: newPhase,
        }
      })

      // Update mouse trail - add new point every frame (~8ms)
      if (now - lastTrailTimeRef.current > 8) {
        const newPoint: TrailPoint = {
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          opacity: 0.5,
        }
        trailRef.current = [...trailRef.current, newPoint].slice(-6) // Keep last 6 points
        lastTrailTimeRef.current = now
      }

      // Fade out trail points
      trailRef.current = trailRef.current.map((point, i) => ({
        ...point,
        opacity: ((i + 1) / trailRef.current.length) * 0.5,
      }))

      setLightPositions([...lightsRef.current])
      setTrailPoints([...trailRef.current])
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [])

  // Draw mouse trail on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (trailPoints.length < 2) return

    // Draw smooth curve using quadratic bezier through points
    ctx.beginPath()
    ctx.moveTo(trailPoints[0].x, trailPoints[0].y)

    // Use quadratic curves for smooth interpolation
    for (let i = 1; i < trailPoints.length - 1; i++) {
      const xc = (trailPoints[i].x + trailPoints[i + 1].x) / 2
      const yc = (trailPoints[i].y + trailPoints[i + 1].y) / 2
      ctx.quadraticCurveTo(trailPoints[i].x, trailPoints[i].y, xc, yc)
    }

    // Curve to the last point
    if (trailPoints.length > 1) {
      const last = trailPoints[trailPoints.length - 1]
      ctx.lineTo(last.x, last.y)
    }

    // Single soft glow streak
    ctx.filter = 'blur(10px)'
    ctx.strokeStyle = 'rgba(255, 180, 100, 0.2)'
    ctx.lineWidth = 12
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()

    // Brighter core
    ctx.filter = 'blur(4px)'
    ctx.strokeStyle = 'rgba(255, 220, 160, 0.35)'
    ctx.lineWidth = 4
    ctx.stroke()
  }, [trailPoints])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Purple-orange sunset gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 50% 120%, rgba(255, 100, 50, 0.5) 0%, transparent 60%),
            radial-gradient(ellipse at 20% 80%, rgba(100, 40, 150, 0.45) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(150, 60, 180, 0.4) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 50%, rgba(60, 20, 100, 0.3) 0%, transparent 60%),
            linear-gradient(180deg, rgba(10, 5, 20, 0.9) 0%, rgba(50, 20, 80, 0.5) 40%, rgba(180, 80, 50, 0.4) 70%, rgba(255, 120, 50, 0.3) 100%)
          `,
        }}
      />

      {/* Large nebula clouds for entire page */}
      {/* Nebula 1 - top left purple */}
      <div
        className="absolute nebula-page"
        style={{
          left: '-15%',
          top: '20%',
          width: '600px',
          height: '450px',
          background: `
            radial-gradient(ellipse 50% 60% at 40% 50%, rgba(140, 60, 200, 0.5) 0%, transparent 50%),
            radial-gradient(ellipse 60% 50% at 60% 40%, rgba(120, 50, 180, 0.4) 0%, transparent 45%),
            radial-gradient(ellipse 40% 70% at 50% 60%, rgba(100, 40, 160, 0.35) 0%, transparent 50%)
          `,
          filter: 'blur(60px)',
          opacity: 0.7,
          animation: 'nebulaFloat1 40s ease-in-out infinite',
        }}
      />

      {/* Nebula 2 - right side orange */}
      <div
        className="absolute nebula-page"
        style={{
          right: '-10%',
          top: '30%',
          width: '550px',
          height: '400px',
          background: `
            radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 120, 50, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse 50% 60% at 40% 60%, rgba(200, 80, 50, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 70% 40% at 60% 40%, rgba(255, 150, 80, 0.35) 0%, transparent 45%)
          `,
          filter: 'blur(55px)',
          opacity: 0.7,
          animation: 'nebulaFloat2 45s ease-in-out infinite',
        }}
      />

      {/* Nebula 3 - bottom left purple */}
      <div
        className="absolute nebula-page"
        style={{
          left: '20%',
          bottom: '-10%',
          width: '650px',
          height: '380px',
          background: `
            radial-gradient(ellipse 70% 50% at 50% 40%, rgba(180, 100, 200, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse 50% 60% at 40% 60%, rgba(150, 80, 180, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 60% 50%, rgba(200, 120, 255, 0.35) 0%, transparent 45%)
          `,
          filter: 'blur(50px)',
          opacity: 0.65,
          animation: 'nebulaFloat3 50s ease-in-out infinite',
        }}
      />

      {/* Nebula 4 - bottom right purple */}
      <div
        className="absolute nebula-page"
        style={{
          right: '5%',
          bottom: '15%',
          width: '500px',
          height: '350px',
          background: `
            radial-gradient(ellipse 60% 40% at 50% 50%, rgba(100, 25, 70, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse 50% 60% at 40% 40%, rgba(60, 15, 90, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 70% 50% at 60% 60%, rgba(120, 30, 100, 0.35) 0%, transparent 45%)
          `,
          filter: 'blur(58px)',
          opacity: 0.7,
          animation: 'nebulaFloat4 38s ease-in-out infinite',
        }}
      />

      {/* Nebula 5 - top right purple */}
      <div
        className="absolute nebula-page"
        style={{
          left: '40%',
          top: '-5%',
          width: '550px',
          height: '350px',
          background: `
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(80, 20, 120, 0.5) 0%, transparent 45%),
            radial-gradient(ellipse 60% 70% at 40% 40%, rgba(60, 20, 100, 0.4) 0%, transparent 50%),
            radial-gradient(ellipse 40% 60% at 60% 60%, rgba(100, 40, 150, 0.35) 0%, transparent 45%)
          `,
          filter: 'blur(52px)',
          opacity: 0.7,
          animation: 'nebulaFloat1 55s ease-in-out infinite reverse',
        }}
      />

      {/* Nebula 6 - middle left purple */}
      <div
        className="absolute nebula-page"
        style={{
          left: '-5%',
          top: '50%',
          width: '450px',
          height: '400px',
          background: `
            radial-gradient(ellipse 40% 60% at 50% 50%, rgba(120, 60, 180, 0.45) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 60% 40%, rgba(100, 50, 160, 0.4) 0%, transparent 45%),
            radial-gradient(ellipse 50% 70% at 40% 60%, rgba(80, 40, 140, 0.35) 0%, transparent 50%)
          `,
          filter: 'blur(48px)',
          opacity: 0.65,
          animation: 'nebulaFloat2 48s ease-in-out infinite reverse',
        }}
      />

      {/* Freely moving fairy lights */}
      {lightPositions.map((light) => (
        <div
          key={light.id}
          className="absolute rounded-full"
          style={{
            width: `${light.size}px`,
            height: `${light.size}px`,
            left: `${light.x}px`,
            top: `${light.y}px`,
            background: `radial-gradient(circle, #FFD700 0%, #FFA500 100%)`,
            boxShadow: `
              0 0 ${light.size * 4}px rgba(255, 215, 0, ${light.opacity}),
              0 0 ${light.size * 8}px rgba(255, 165, 0, ${light.opacity * 0.6}),
              0 0 ${light.size * 15}px rgba(255, 140, 0, ${light.opacity * 0.3})
            `,
            opacity: light.opacity,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* Mouse trail canvas - smooth line streak */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />
    </div>
  )
}
