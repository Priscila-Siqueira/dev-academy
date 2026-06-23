import { Button } from '../../ui/Button/Button'



export function CourseCard({ title, description, level, progress }) {

return (

  <article className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">

    <div className="mb-4 flex items-start justify-between gap-4">

      <div>

        <h3 className="font-bold text-text-main">{title}</h3>

        <p className="mt-1 text-sm text-text-muted">{description}</p>

      </div>



      <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">

        {level}

      </span>

    </div>



    <div className="mb-4">

      <div className="mb-1 flex justify-between text-xs text-text-muted">

        <span>Progresso</span>

        <span>{progress}%</span>

      </div>



      <div className="h-2 rounded-full bg-slate-200">

        <div className="h-2 rounded-full bg-primary" style={{ width: `${progress}%` }} />

      </div>

    </div>



    <Button variant="secondary" className="w-full">

      Continuar

    </Button>

  </article>

)

}