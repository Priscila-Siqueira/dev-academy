export function StatCard({ title, value, description }) {

return (

  <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">

    <p className="text-sm font-medium text-text-muted">{title}</p>

    <strong className="mt-2 block text-3xl font-bold text-text-main">{value}</strong>

    <span className="mt-1 block text-xs text-text-muted">{description}</span>

  </article>

)

}