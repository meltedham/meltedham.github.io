import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GraduationCap, Award } from 'lucide-react'

const education = [
  {
    institution: 'National University of Singapore (NUS)',
    degree: 'Bachelor of Computing in Computer Science',
    period: 'Aug 2024 - Jul 2028',
    classification: 'Second Class (Upper) Honours',
    scholarship: 'NUS Merit Scholarship',
    highlights: [
      'NUS Merit Scholarship Recipient',
      'Relevant coursework: Data Structures & Algorithms, Software Engineering, Database Systems, Computer Graphics, Operating Systems',
      'Current coursework: Introduction to AI/ML, Information Security',
    ],
  },
]

function EducationCard({ edu, delay }: { edu: typeof education[0]; delay: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`glass-card p-6 rounded-xl animate-on-scroll from-top ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 glass rounded-lg text-accent-primary">
          <GraduationCap size={20} />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text-primary">{edu.institution}</h3>
          <p className="text-accent-primary text-sm">{edu.degree}</p>
          <p className="text-text-secondary text-xs mt-1">{edu.period}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <span className="text-xs px-3 py-1 glass rounded-full text-accent-warm">
          <Award size={12} className="inline mr-1" />
          {edu.scholarship}
        </span>
        <span className="text-xs px-3 py-1 glass rounded-full text-accent-primary">
          {edu.classification}
        </span>
      </div>

      <ul className="space-y-2">
        {edu.highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-2 text-text-secondary text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 flex-shrink-0" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function EducationSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-on-scroll from-top ${headerVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-text-primary">
            Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mx-auto mb-6" />
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu, index) => (
            <EducationCard key={edu.institution} edu={edu} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  )
}
