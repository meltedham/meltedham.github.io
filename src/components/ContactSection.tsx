import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { splitIntoWords } from '../hooks/useTextReveal'
import { Github, Linkedin, Send, Check, Loader2 } from 'lucide-react'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mwvgzkne'

// Animated word component with bounce effect
function AnimatedText({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = splitIntoWords(text)
  return (
    <span className="whitespace-pre-wrap">
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span className="inline-block word-bounce" style={{ animationDelay: `${delay + i * 50}ms` }}>
            {word}
          </span>
          {i < words.length - 1 && <span className="inline-block word-bounce" style={{ animationDelay: `${delay + i * 50 + 20}ms` }}>&nbsp;</span>}
        </span>
      ))}
    </span>
  )
}

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/rae-yen-yeow-558858353',
    icon: <Linkedin size={20} />,
  },
]

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })

      console.log('Form response status:', response.status)

      if (response.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', message: '' })
      } else {
        const data = await response.json().catch(() => ({}))
        console.log('Form error response:', data)
        setErrorMessage(data.error || `Error ${response.status}: Please try again.`)
        setStatus('error')
      }
    } catch (err) {
      console.error('Form submit error:', err)
      setErrorMessage('Failed to send message. Please try again.')
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll from-top ${isVisible ? 'visible' : ''}`}
      >
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-text-primary">Get In </span>
          <span className="text-accent-primary">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
        <p className="text-text-secondary max-w-xl mx-auto mb-8">
          <AnimatedText text="Currently open to internship opportunities from 11 May 2027 to 31 August 2027. Feel free to reach out if you'd like to connect!" delay={100} />
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
          <div className="glass-card rounded-xl p-6 space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-orange-50 border border-orange-100 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="w-full px-4 py-3 bg-orange-50 border border-orange-100 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-orange-50 border border-orange-100 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-accent-primary transition-colors resize-none"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-400 text-sm">{errorMessage}</p>
            )}

            {status === 'success' && (
              <div className="flex items-center justify-center gap-2 text-accent-green">
                <Check size={18} />
                <span>Message sent! I'll get back to you soon.</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full px-6 py-3 bg-gradient-to-r from-violet-900 to-purple-900 text-white font-semibold rounded-lg hover:from-violet-800 hover:to-purple-800 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg border dark:border-orange-800 border-purple-400 dark:bg-gradient-to-r dark:from-orange-900 dark:to-amber-900 dark:hover:from-orange-800 dark:hover:to-amber-800 dark:shadow-orange-600/20 dark:shadow-lg"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass-card rounded-lg text-text-secondary hover:text-accent-primary transition-all duration-200 hover:scale-110"
              aria-label={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
