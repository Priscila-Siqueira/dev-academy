export function PathCard({ title, courses, duration }) {

return (

  <article className="rounded-2xl bg-primary p-5 text-white shadow-sm">

    <h3 className="text-lg font-bold">{title}</h3>



    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">

      <div className="rounded-xl bg-white/10 p-3">

        <span className="block text-white/70">Cursos</span>

        <strong>{courses}</strong>

      </div>



      <div className="rounded-xl bg-white/10 p-3">

        <span className="block text-white/70">Duração</span>

        <strong>{duration}</strong>

      </div>

    </div>

  </article>

)

}