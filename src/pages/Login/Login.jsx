import { Button } from '../../components/ui/Button/Button'
import { Checkbox } from '../../components/ui/Checkbox/Checkbox'
import { Input } from '../../components/ui/Input/Input'
import { Logo } from '../../components/ui/Logo/Logo'

export function Login({ onNavigate }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <section className="w-full max-w-md rounded-2xl bg-surface p-8 shadow-xl">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>

        <h1 className="text-2xl font-bold text-text-main">Entrar na plataforma</h1>
        <p className="mt-2 text-sm text-text-muted">
          Acesse sua trilha de estudos e acompanhe sua evolução.
        </p>

        <form className="mt-6 space-y-4">
          <Input label="E-mail" type="email" placeholder="seuemail@email.com" />
          <Input label="Senha" type="password" placeholder="Digite sua senha" />

          <div className="flex items-center justify-between">
            <Checkbox label="Lembrar acesso" />
            <button type="button" className="text-sm font-medium text-primary hover:underline">
              Esqueci a senha
            </button>
          </div>

          <Button className="w-full" type="button" onClick={() => onNavigate('home')}>
            Entrar
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-text-muted">
          Não tem conta?{' '}
          <button
            type="button"
            className="font-semibold text-primary hover:underline"
            onClick={() => onNavigate('register')}
          >
            Criar cadastro
          </button>
        </p>
      </section>
    </main>
  )
}
