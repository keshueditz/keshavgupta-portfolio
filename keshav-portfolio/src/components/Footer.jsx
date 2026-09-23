import { profile } from '../data/portfolio.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink border-t border-ink-border py-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-bone-muted text-xs sm:text-sm">
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-bone-muted text-xs sm:text-sm">
          {profile.title} — {profile.location}
        </p>
      </div>
    </footer>
  )
}
