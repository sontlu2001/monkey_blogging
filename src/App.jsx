import { Routes } from 'react-router'
import './App.css'
import { AuthProvider } from './contexts/authContext'

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes></Routes>
      </AuthProvider>
    </div>
  )
}

export default App
