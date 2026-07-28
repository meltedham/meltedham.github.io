import {
  Code2,
  Database,
  Wrench,
  Layers,
  Globe,
  Terminal,
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: <Layers size={20} />,
    skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Next.js', 'Vue.js'],
  },
  {
    title: 'Backend',
    icon: <Database size={20} />,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
  },
  {
    title: 'Tools & DevOps',
    icon: <Wrench size={20} />,
    skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux', 'VS Code'],
  },
  {
    title: 'Concepts',
    icon: <Globe size={20} />,
    skills: ['Agile/Scrum', 'Responsive Design', 'Web Security', 'Performance', 'Accessibility'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-text-primary">Technical </span>
            <span className="text-accent-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 bg-bg-secondary rounded-xl border border-border hover:border-accent-primary/30 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2 bg-bg-tertiary rounded-lg text-accent-primary">
                  {category.icon}
                </span>
                <h3 className="font-semibold text-text-primary">{category.title}</h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-text-secondary text-sm">
                    <Code2 size={14} className="text-accent-primary/60 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-secondary rounded-full border border-border text-text-secondary text-sm">
            <Terminal size={16} className="text-accent-green" />
            <span>Always learning something new</span>
          </div>
        </div>
      </div>
    </section>
  )
}
