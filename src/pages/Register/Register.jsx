import { Button } from '../../components/ui/Button/Button'
import { Checkbox } from '../../components/ui/Checkbox/Checkbox'
import { Input } from '../../components/ui/Input/Input'
import { Logo } from '../../components/ui/Logo/Logo'

export function Register({ onNavigate }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="w-full max-w-lg rounded-2xl bg-surface p-8 shadow-xl">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <h1 className="text-2xl font-bold text-text-main">Criar conta</h1>
        <p className="mt-2 text-sm text-text-muted">
          Cadastre-se para acessar cursos, trilhas e indicadores.
        </p>

        <form className="mt-6 space-y-4">
          <Input label="Nome completo" placeholder="Digite seu nome" />
          <Input label="E-mail" type="email" placeholder="seuemail@email.com" />
          <Input label="Senha" type="password" placeholder="Crie uma senha" />
          <Input label="Confirmar senha" type="password" placeholder="Repita a senha" />

          <Checkbox label="Aceito os termos acadêmicos da plataforma" />

          <Button className="w-full" type="button" onClick={() => onNavigate('home')}>
            Criar conta
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-text-muted">
          Já possui conta?{' '}
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
            onClick={() => onNavigate('login')}
          >
            Entrar
          </button>
        </p>
      </section>
    </main>
  )
}