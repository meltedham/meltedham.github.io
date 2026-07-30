import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { Briefcase, Brain } from 'lucide-react'

interface Experience {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
  icon: React.ReactNode
}

const experiences: Experience[] = [
  {
    company: 'TOPPAN Ecquaria (Office of AI)',
    role: 'Student Internship Programme',
    period: 'May 2025 - Jul 2025',
    location: 'Singapore',
    icon: <Brain size={20} />,
    highlights: [
      'Built frontend UI features, patched application bugs, and wrote automated unit tests for system verification',
      'Configured AWS CloudWatch dashboards for UAT environment monitoring (CPU, memory, disk utilisation)',
      'Restored on-premise server: resolved OS package errors, installed GPU drivers, set up secure SSH access',
      'Engineered an MCP server to parse monthly risk/compliance PDFs, automatically flagging high-risk entries and status downgrades',
      'Developed a Transaction Announcement Generator classifying financial transactions against regulatory thresholds',
      'Populated an AI Skill Registry with 100 skills across 13 business categories using VoltAgent, with Alembic database migrations',
      'Authored Langflow training guides for internal hackathons on multi-agent AI workflow configuration',
      'Researched agentic workflows, MCP, RAG pipelines (Qdrant, Ragas), LSTM/GRU models, and OWASP LLM security vulnerabilities',
      'Resolved environment issues by migrating from Windows to Linux workspace, fixing API errors and port conflicts',
      'Navigated complex AWS IAM permissions, VPC configurations, and security groups for cloud infrastructure',
    ],
  },
  {
    company: 'DND Trading & Services',
    role: 'Administrative Intern',
    period: 'Apr 2024 - May 2024',
    location: 'Singapore',
    icon: <Briefcase size={20} />,
    highlights: [
      'Handled over 100 customer-related issues daily, providing timely responses to meet service quality standards',
      'Coordinated with partner companies to track and manage deliveries, improving reliability and punctuality',
      'Collaborated with 4 departments for stock tracking to optimise allocation and ensure order fulfilment',
    ],
  },
]

function ExperienceCard({ experience, delay }: { experience: Experience; delay: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`glass-card p-6 rounded-xl animate-on-scroll from-top ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 glass rounded-lg text-accent-primary">
          {experience.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary">{experience.role}</h3>
          <p className="text-accent-primary text-sm">{experience.company}</p>
          <p className="text-text-secondary text-xs mt-1">
            {experience.period} · {experience.location}
          </p>
        </div>
      </div>

      <ul className="space-y-2">
        {experience.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll from-top ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-text-primary">Work </span>
            <span className="text-accent-primary">Experience</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            My professional journey through internships and real-world projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
