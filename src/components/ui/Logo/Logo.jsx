export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white">
        DA
      </div>

      <div>
        <strong className="block text-base leading-5 text-text-main">Dev Academy</strong>
        <span className="text-xs text-text-muted">React + Tailwind</span>
      </div>
    </div>
  )
}