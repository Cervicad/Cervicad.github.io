export default function Footer() {
  return (
    <footer className="border-t border-navy-deep bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-[#c9d6e8]">
          © 2026 Kevin Tallagrand — Conçu et développé avec React &amp; Tailwind CSS
        </p>
        <p className="inline-flex items-center gap-2 font-mono text-[11px] text-[#c9d6e8]">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#5fd39a]" />
          Ouvert aux opportunités
        </p>
      </div>
    </footer>
  )
}
