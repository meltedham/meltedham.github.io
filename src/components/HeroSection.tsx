import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orb */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent-warm/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '-3s' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro label */}
        <p className="text-accent-primary font-mono text-sm mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
          Hello, I'm
        </p>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up"
          style={{ animationDelay: '100ms' }}
        >
          <span className="bg-gradient-to-r from-text-primary via-accent-primary to-accent-warm bg-clip-text text-transparent">
            Your Name
          </span>
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-text-secondary mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Full-Stack Developer & UI/UX Enthusiast
        </p>

        {/* Description */}
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '300ms' }}>
          I build accessible, performant, and visually compelling web applications.
          Focused on clean code and thoughtful user experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 bg-accent-primary text-bg-primary font-medium rounded-lg hover:bg-accent-primary/90 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent-primary/25"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 border border-accent-primary text-accent-primary font-medium rounded-lg hover:bg-accent-primary/10 transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primary transition-all duration-200 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent-primary transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-text-secondary hover:text-accent-primary transition-all duration-200 hover:scale-110"
            aria-label="Email Me"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-secondary hover:text-accent-primary transition-all duration-200 animate-fade-up"
          style={{ animationDelay: '600ms' }}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </button>
      </div>
    </section>
  )
}
