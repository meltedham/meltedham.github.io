export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-text-primary">About </span>
              <span className="text-accent-primary">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-accent-primary to-accent-warm rounded-full mb-8" />

            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              I'm a passionate developer with experience building modern web applications.
              I specialize in creating intuitive user interfaces backed by robust, scalable systems.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source,
              or sharing knowledge with the developer community. I believe in writing code that's not
              just functional, but maintainable and accessible to everyone.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-bg-secondary rounded-lg border border-border">
                <p className="text-accent-primary font-semibold text-2xl">2+</p>
                <p className="text-text-secondary text-sm">Years Experience</p>
              </div>
              <div className="p-4 bg-bg-secondary rounded-lg border border-border">
                <p className="text-accent-primary font-semibold text-2xl">10+</p>
                <p className="text-text-secondary text-sm">Projects Completed</p>
              </div>
            </div>
          </div>

          {/* Visual Element - Decorative */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-gradient-to-br from-accent-primary/20 to-accent-warm/20 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-bg-tertiary rounded-full flex items-center justify-center border border-border">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-accent-primary rounded-lg rotate-12" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-warm/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
