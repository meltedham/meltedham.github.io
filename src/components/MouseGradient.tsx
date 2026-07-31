import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseX: number
  baseY: number
  color: [number, number, number]
}

const CELL = 35

const DARK_PALETTE: [number, number, number][] = [
  [100, 20, 15],
  [115, 35, 10],
  [120, 55, 18],
  [110, 65, 30],
  [90, 35, 55],
  [70, 25, 85],
  [50, 18, 80],
  [38, 15, 70],
]

const LIGHT_PALETTE: [number, number, number][] = [
  [255, 160, 120],
  [255, 140, 100],
  [255, 175, 130],
  [255, 190, 160],
  [255, 150, 150],
  [220, 130, 200],
  [190, 120, 230],
  [170, 100, 220],
]

export default function MouseGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const cols = Math.ceil(window.innerWidth / CELL) + 4
    const rows = Math.ceil(window.innerHeight / CELL) + 4

    particlesRef.current = Array.from({ length: cols * rows }, (_, i) => {
      const col = i % cols
      const row = Math.floor(i / cols)
      const baseX = col * CELL
      const baseY = row * CELL
      return {
        x: baseX,
        y: baseY,
        vx: 0,
        vy: 0,
        baseX,
        baseY,
        color: [0, 0, 0] as [number, number, number],
      }
    })

    let animationId: number

    const getPalette = () => {
      return document.querySelector('html')?.classList.contains('light')
        ? LIGHT_PALETTE
        : DARK_PALETTE
    }

    const animate = () => {
      timeRef.current += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const palette = getPalette()

      particles.forEach((p, i) => {
        // Update color from palette (row-based gradient)
        const row = Math.floor(i / (Math.ceil(canvas.width / CELL) + 4))
        const totalRows = Math.ceil(canvas.height / CELL) + 4
        const colorIdx = Math.floor((row / totalRows) * palette.length) % palette.length
        p.color = [...palette[colorIdx]]

        // Spring back to base
        const springX = (p.baseX - p.x) * 0.012
        const springY = (p.baseY - p.y) * 0.012
        p.vx += springX
        p.vy += springY

        // Gentle ambient sway
        const angle = Math.sin(p.x * 0.001 + timeRef.current) *
                       Math.cos(p.y * 0.001 + timeRef.current * 0.6) * Math.PI * 0.3
        p.vx += Math.cos(angle) * 0.005
        p.vy += Math.sin(angle) * 0.005

        // Damp and move
        p.vx *= 0.94
        p.vy *= 0.94
        p.x += p.vx
        p.y += p.vy

        // Soft bounds
        if (p.x < 0) { p.x = 0; p.vx *= -0.2 }
        if (p.x > canvas.width) { p.x = canvas.width; p.vx *= -0.2 }
        if (p.y < 0) { p.y = 0; p.vy *= -0.2 }
        if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -0.2 }
      })

      particles.forEach((p) => {
        const r = p.color[0], g = p.color[1], b = p.color[2]
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, CELL * 3)
        grad.addColorStop(0, `rgba(${r},${g},${b},0.85)`)
        grad.addColorStop(0.3, `rgba(${r},${g},${b},0.5)`)
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
        ctx.beginPath()
        ctx.arc(p.x, p.y, CELL * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    animate()

    return () => {
      window.removeEventListener('mousemove', () => {})
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
