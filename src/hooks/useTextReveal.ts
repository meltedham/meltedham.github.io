import { useEffect, useRef, useState } from 'react'

interface UseTextRevealOptions {
  threshold?: number
  rootMargin?: string
  staggerDelay?: number
  animationType?: 'reveal' | 'reveal-left' | 'reveal-right' | 'fade'
  once?: boolean
}

export function useTextReveal(options: UseTextRevealOptions = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    staggerDelay = 50,
    animationType = 'reveal',
    once = true,
  } = options

  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [wordVisibility, setWordVisibility] = useState<boolean[]>([])

  const getAnimationClass = () => {
    switch (animationType) {
      case 'reveal-left':
        return 'word-reveal-left'
      case 'reveal-right':
        return 'word-reveal-right'
      case 'fade':
        return 'word-reveal-fade'
      default:
        return 'word-reveal'
    }
  }

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(element)
          }
        } else if (!once) {
          setIsVisible(false)
          setWordVisibility([])
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  // Initialize word visibility array based on children count
  useEffect(() => {
    if (ref.current && wordVisibility.length === 0) {
      const wordCount = ref.current.querySelectorAll('.reveal-word').length
      setWordVisibility(new Array(wordCount).fill(false))
    }
  }, [ref.current?.querySelectorAll('.reveal-word').length]) // eslint-disable-line react-hooks/exhaustive-deps

  const getWordStyle = (index: number) => {
    if (!isVisible) return {}
    return {
      animationDelay: `${index * staggerDelay}ms`,
    }
  }

  return {
    ref,
    isVisible,
    wordVisibility,
    getWordStyle,
    animationClass: getAnimationClass(),
    getWordClass: (_index: number) => {
      const baseClass = `reveal-word ${getAnimationClass()}`
      return isVisible ? baseClass : `${baseClass} invisible`
    },
  }
}

// Utility function to split text into words for animation
export function splitIntoWords(text: string): string[] {
  return text.split(/\s+/).filter(word => word.length > 0)
}