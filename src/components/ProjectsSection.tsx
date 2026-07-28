import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  longDescription: string
  tags: string[]
  githubUrl: string
  liveUrl?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack online store with cart functionality and payment integration.',
    longDescription: 'Built with React and Node.js, featuring user authentication, product catalog, shopping cart, Stripe payment processing, and an admin dashboard for managing inventory.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates.',
    longDescription: 'Features include drag-and-drop kanban boards, team workspaces, real-time collaboration via WebSockets, task comments, and file attachments.',
    tags: ['TypeScript', 'React', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with 7-day forecasts and location search.',
    longDescription: 'Clean interface showing current conditions and weekly forecasts. Uses OpenWeatherMap API with geolocation support and local storage for saving favorite locations.',
    tags: ['React', 'TypeScript', 'REST API'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group p-6 bg-bg-secondary rounded-xl border border-border hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">
      <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent-primary transition-colors">
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
            className="px-3 py-1 text-xs font-mono bg-bg-tertiary text-text-secondary rounded-full border border-border group-hover:border-accent-primary/30 group-hover:text-accent-primary/80 transition-colors"
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
  return (
    <section id="projects" className="py-20 lg:py-32 bg-bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-text-primary">Featured </span>
            <span className="text-accent-primary">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            A selection of projects I've worked on. Each one represents a unique challenge
            and an opportunity to learn something new.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
