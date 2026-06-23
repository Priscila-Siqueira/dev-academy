import { Button } from '../../ui/Button/Button'

export function Header({ onMenuClick, onLogout }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 shadow-sm lg:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm lg:hidden"
        >
          ☰
        </button>

        <div>
          <h1 className="text-lg font-bold text-text-main">Área do Aluno</h1>
          <p className="text-xs text-text-muted">Dashboard acadêmico</p>
        </div>
      </div>

      <Button variant="secondary" onClick={onLogout}>
        Sair
      </Button>
    </header>
  )
}