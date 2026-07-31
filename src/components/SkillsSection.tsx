import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { splitIntoWords } from '../hooks/useTextReveal'
import {
  Code2,
  Database,
  Wrench,
  Layers,
} from 'lucide-react'

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

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: <Layers size={20} />,
    skills: ['Java', 'Python', 'C', 'C#', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Frameworks & Tools',
    icon: <Wrench size={20} />,
    skills: ['React', 'React Native', 'Unity', 'PyTorch', 'OpenGL'],
  },
  {
    title: 'Backend & Data',
    icon: <Database size={20} />,
    skills: ['PostgreSQL', 'Database Systems', 'Node.js', 'Alembic'],
  },
  {
    title: 'Dev & Creative',
    icon: <Code2 size={20} />,
    skills: ['Git', 'Gradle', 'JUnit', 'Blender', 'Figma', 'Music Theory'],
  },
]

export default function SkillsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll from-top ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-text-primary">Technical </span>
            <span className="text-accent-primary">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
          <p className="text-text-secondary max-w-2xl mx-auto">
            <AnimatedText text="Technologies I work with." delay={0} />
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
            return (
              <div
                key={category.title}
                ref={ref}
                className={`glass-card p-6 rounded-xl animate-on-scroll from-top ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="p-2 glass rounded-lg text-accent-primary">
                    {category.icon}
                  </span>
                  <h3 className="font-semibold text-text-primary">{category.title}</h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-text-secondary text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary/60" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-text-secondary text-sm">
            <span>Languages: English (Fluent), Mandarin (Intermediate)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
