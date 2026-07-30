import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { GraduationCap, Award } from 'lucide-react'

export default function AboutSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation({ threshold: 0.2 })
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div
            ref={textRef}
            className={`animate-on-scroll from-left ${textVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-text-primary">About </span>
              <span className="text-accent-primary">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mb-8" />

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I'm a Year 3 Computer Science student at the National University of Singapore (NUS),
              currently maintaining a GPA of 4.07. I'm passionate about software development,
              cybersecurity, and creating impactful applications that solve real problems.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              Beyond coding, I'm an avid learner who enjoys exploring new technologies,
              participating in hackathons, and contributing to my community through volunteering.
              I believe in writing code that's not just functional, but maintainable and accessible to everyone.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <GraduationCap size={18} className="text-accent-primary" />
                  <p className="text-text-secondary text-sm">Education</p>
                </div>
                <p className="text-accent-primary font-semibold">NUS CS</p>
                <p className="text-text-secondary text-xs">2nd Class Honours</p>
              </div>
              <div className="glass-card p-4 rounded-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={18} className="text-accent-primary" />
                  <p className="text-text-secondary text-sm">Scholarship</p>
                </div>
                <p className="text-accent-primary font-semibold">NUS Merit</p>
                <p className="text-text-secondary text-xs">Merit Scholarship</p>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div className="glass-card p-4 rounded-xl">
              <p className="text-text-secondary text-sm mb-3 font-medium">Key Coursework</p>
              <div className="flex flex-wrap gap-2">
                {['Data Structures & Algos', 'Software Engineering', 'Database Systems', 'Info Security', 'AI/ML', 'Computer Graphics', 'Operating Systems'].map((course) => (
                  <span key={course} className="px-2 py-1 text-xs glass rounded-full text-text-secondary">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div
            ref={visualRef}
            className={`hidden lg:flex items-center justify-center animate-on-scroll from-right ${visualVisible ? 'visible' : ''}`}
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full glass-card flex items-center justify-center">
                <div className="w-56 h-56 rounded-full glass flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent-primary rounded-lg rotate-12 glass-card" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-warm/50 rounded-full glass-card" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
