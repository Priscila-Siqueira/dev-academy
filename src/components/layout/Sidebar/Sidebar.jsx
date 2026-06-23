import { Logo } from '../../ui/Logo/Logo'

const menuItems = [
  'Dashboard',
  'Cursos',
  'Trilhas',
  'Certificados',
  'Configurações',
]

export function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 transform border-r border-slate-200 bg-white p-5 shadow-xl transition-transform lg:static lg:z-auto lg:translate-x-0 lg:shadow-none ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8 flex items-center justify-between">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            className="text-xl lg:hidden"
          >
            ×
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={item}
              type="button"
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                index === 0
                  ? 'bg-primary text-white'
                  : 'text-text-muted hover:bg-primary-light hover:text-primary'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}