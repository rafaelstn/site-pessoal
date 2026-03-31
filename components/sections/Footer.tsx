export function Footer() {
  return (
    <footer className="py-8 sm:py-10 bg-[#06060a] border-t border-white/[0.05]">
      <div className="container-main flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-ink-muted text-sm font-display">
          Rafael Damasceno © 2026
        </span>
        <div className="flex gap-6 sm:gap-8">
          <a
            href="https://www.linkedin.com/in/rafael-dmcn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-subtle text-sm hover:text-white transition-colors py-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rafaelstn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-subtle text-sm hover:text-white transition-colors py-2"
          >
            GitHub
          </a>
          <a
            href="mailto:contato@rafaeldamasceno.dev"
            className="text-ink-subtle text-sm hover:text-white transition-colors py-2"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
