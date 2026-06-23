export function Input({ label, error, className = '', ...props }) {
  return (
    <label className="block space-y-1">
      {label && <span className="text-sm font-medium text-text-main">{label}</span>}

      <input
        className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-text-main outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary-light ${className}`}
        {...props}
      />

      {error && <span className="text-xs text-red-600">{error}</span>}
    </label>
  )
}