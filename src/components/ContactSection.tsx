import { useState } from 'react'
import { Github, Linkedin, Mail, Check, Copy } from 'lucide-react'

const email = 'your.email@example.com'

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com',
    icon: <Github size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Email',
    url: `mailto:${email}`,
    icon: <Mail size={20} />,
  },
]

export default function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-bg-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-text-primary">Get In </span>
          <span className="text-accent-primary">Touch</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
        <p className="text-text-secondary max-w-xl mx-auto mb-12">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology. Feel free to reach out!
        </p>

        {/* Email with Copy */}
        <div className="mb-12">
          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-3 px-6 py-4 bg-bg-secondary rounded-xl border border-border hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Copy email address"
          >
            <Mail size={20} className="text-accent-primary" />
            <span className="text-text-primary font-mono">{email}</span>
            <span className="text-text-secondary text-sm group-hover:text-accent-primary transition-colors">
              {copied ? (
                <span className="inline-flex items-center gap-1 text-accent-green">
                  <Check size={16} />
                  Copied!
                </span>
              ) : (
                <span className="inline-flex items-center gap-1">
                  <Copy size={16} />
                  Copy
                </span>
              )}
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name === 'Email' ? undefined : '_blank'}
              rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
              className="p-3 bg-bg-secondary rounded-lg border border-border text-text-secondary hover:text-accent-primary hover:border-accent-primary/50 transition-all duration-200 hover:scale-110"
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
