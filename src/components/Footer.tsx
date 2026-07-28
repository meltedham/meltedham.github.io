export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-text-secondary text-sm">
            Built with React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
