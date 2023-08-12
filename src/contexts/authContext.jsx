import { useState } from 'react'
import { createContext, useContext } from 'react'

const AuthContext = createContext()

export function AuthProvider(props) {
  const [userInfo, setUserInfo] = useState({})
  const value = { userInfo, setUserInfo }

  return <AuthContext.Provider value={value} {...props}></AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (typeof context === 'undefined') throw new Error('useAuth must be used within AuthProvider')
  return context
}
