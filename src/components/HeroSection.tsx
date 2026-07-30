import { Github, Linkedin } from 'lucide-react'

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background nebula clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Nebula cloud 1 - top left purple-pink */}
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[400px] animate-float"
          style={{
            background: `
              radial-gradient(ellipse 50% 60% at 40% 50%, rgba(180, 60, 150, 0.6) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 60% 40%, rgba(150, 50, 180, 0.5) 0%, transparent 45%),
              radial-gradient(ellipse 40% 70% at 50% 60%, rgba(120, 40, 160, 0.4) 0%, transparent 50%)
            `,
            filter: 'blur(60px)',
            opacity: 0.6,
            borderRadius: '30% 70% 40% 60% / 60% 40% 70% 30%',
          }}
        />
        {/* Nebula cloud 2 - bottom right orange */}
        <div
          className="absolute bottom-1/4 -right-20 w-[400px] h-[350px] animate-float"
          style={{
            background: `
              radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255, 120, 50, 0.6) 0%, transparent 50%),
              radial-gradient(ellipse 50% 60% at 40% 60%, rgba(200, 80, 50, 0.5) 0%, transparent 45%),
              radial-gradient(ellipse 70% 40% at 60% 40%, rgba(255, 150, 80, 0.4) 0%, transparent 50%)
            `,
            filter: 'blur(55px)',
            opacity: 0.6,
            borderRadius: '60% 40% 70% 30% / 50% 70% 30% 60%',
            animationDelay: '-3s',
          }}
        />
        {/* Nebula cloud 3 - top right purple */}
        <div
          className="absolute top-1/3 -right-10 w-[350px] h-[300px] animate-float"
          style={{
            background: `
              radial-gradient(ellipse 50% 50% at 50% 50%, rgba(80, 20, 120, 0.6) 0%, transparent 50%),
              radial-gradient(ellipse 60% 70% at 40% 40%, rgba(60, 20, 100, 0.5) 0%, transparent 45%),
              radial-gradient(ellipse 40% 60% at 60% 60%, rgba(100, 40, 150, 0.4) 0%, transparent 50%)
            `,
            filter: 'blur(50px)',
            opacity: 0.5,
            borderRadius: '40% 60% 50% 50% / 70% 30% 60% 40%',
            animationDelay: '-1.5s',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Intro label */}
        <p className="text-accent-primary font-mono text-sm mb-4 animate-fade-up" style={{ animationDelay: '0ms' }}>
          Hello, I'm
        </p>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up text-accent-primary"
          style={{ animationDelay: '100ms' }}
        >
          Yeow Rae Yen
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-text-secondary mb-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
          Year 3 Computer Science Student · National University of Singapore (NUS)  
        </p>

        {/* Description */}
        <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-12 animate-fade-up" style={{ animationDelay: '300ms' }}>
          Hands-on experience in software development, basic AI integration, SQL database design, and CTFs/hackathons. Specializing in AI/ML and cybersecurity. Seeking May – August 2027 internship opportunities in AI or Security. 
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '400ms' }}>
          <button
            onClick={() => scrollToSection('#projects')}
            className="px-8 py-3 glass-card text-text-primary font-medium rounded-lg hover:scale-105 transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="px-8 py-3 glass-card text-text-primary font-medium rounded-lg hover:scale-105 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '500ms' }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-lg text-text-secondary hover:text-accent-primary transition-all duration-200 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rae-yen-yeow-558858353"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-lg text-text-secondary hover:text-accent-primary transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={24} />
          </a>
        </div>

      </div>
    </section>
  )
}
