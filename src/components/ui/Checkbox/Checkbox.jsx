export function Checkbox({ label, className = '', ...props }) {
  return (
    <label className={`flex items-center gap-2 text-sm text-text-muted ${className}`}>
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-slate-300 text-primary accent-primary"
        {...props}
      />
      <span>{label}</span>
    </label>
  )
}