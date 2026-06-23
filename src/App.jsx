import { useState } from 'react'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Register } from './pages/Register/Register'

export default function App() {
  const [page, setPage] = useState('login')

  if (page === 'register') {
    return <Register onNavigate={setPage} />
  }

  if (page === 'home') {
    return <Home onNavigate={setPage} />
  }

  return <Login onNavigate={setPage} />
}