import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { ExternalLink, Github, Trophy, Shield, Heart } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
  icon: React.ReactNode
  achievement?: string
}

const projects: Project[] = [
  {
    title: 'Orbital — Singapore Mahjong Game',
    description: 'A fully-featured Singapore Mahjong game with variable difficulty and interactive tutorial.',
    longDescription: 'Built as a Software Engineering summer project using Unity and C#. Features include rule-based AI opponents with multiple difficulty levels, an interactive tutorial for new players, comprehensive gameplay mechanics, and collaborative Git-based development. Achieved Apollo level (2nd highest) for outstanding implementation.',
    tags: ['Unity', 'C#', 'OpenGL', 'Git', 'JUnit Testing'],
    githubUrl: 'https://github.com',
    icon: <Trophy size={20} />,
    achievement: 'Apollo Award (2nd Highest)',
  },
  {
    title: 'A.YCEP × Greycademy CTF',
    description: 'Cybersecurity competition covering web exploitation, reverse engineering, and digital forensics.',
    longDescription: 'Participated in an intensive Capture the Flag competition with workshops in Web Exploitation, Reverse Engineering, OS Security, Pwn, and Digital Forensics. Collaborated in a team of 4, qualifying for finals and finishing 8th out of 15 teams in the final round.',
    tags: ['Cybersecurity', 'Web Exploitation', 'Reverse Engineering', 'CTF'],
    githubUrl: 'https://github.com',
    icon: <Shield size={20} />,
    achievement: '7th in Qualifiers, 8th in Finals',
  },
  {
    title: 'HackitRx Singapore 2025',
    description: 'A mobile app prototype to help patients and caregivers manage chronic health conditions.',
    longDescription: 'Collaborated in a team of 3 to design and build a React Native application for managing chronic health conditions. Features include medication tracking, food compatibility alerts, and health data monitoring. Designed UI/UX in Figma and implemented functionality in JavaScript/TypeScript.',
    tags: ['React Native', 'JavaScript', 'TypeScript', 'Figma', 'Health Tech'],
    githubUrl: 'https://github.com',
    icon: <Heart size={20} />,
  },
  {
    title: 'TikTok TechJam 2025',
    description: 'NLP-powered review filtering system using transformer models.',
    longDescription: 'Built in a team of 5, this Python-based system uses Hugging Face transformers and Scikit-learn to classify and filter Google Local Reviews. Processed real-world review data to extract meaningful insights and filter spam or low-quality reviews.',
    tags: ['Python', 'Hugging Face', 'Scikit-learn', 'pandas', 'NLP'],
    githubUrl: 'https://github.com',
    icon: <Shield size={20} />,
  },
]

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <article
      ref={ref}
      className={`glass-card p-6 rounded-xl animate-on-scroll from-top ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 glass rounded-lg text-accent-primary">
          {project.icon}
        </div>
        {project.achievement && (
          <span className="text-xs px-2 py-1 glass rounded-full text-accent-warm">
            {project.achievement}
          </span>
        )}
      </div>

      <h3 className="text-xl font-semibold text-text-primary mb-2">
        {project.title}
      </h3>
      <p className="text-text-secondary mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      <p className="text-text-secondary mb-6 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {project.longDescription}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-mono glass text-text-secondary rounded-full transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm"
          aria-label={`View ${project.title} source on GitHub`}
        >
          <Github size={16} />
          <span>Source</span>
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors text-sm"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="projects" className="py-20 lg:py-32 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll from-top ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-text-primary">Featured </span>
            <span className="text-accent-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            From hackathon winners to cybersecurity competitions, here's a look at my recent work and achievements.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
