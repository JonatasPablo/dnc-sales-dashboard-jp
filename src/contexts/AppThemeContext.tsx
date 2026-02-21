import {createContext, useState, useEffect, ReactNode} from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/styles'
import { appThemeContextProps } from '@/types'

// eslint-disable-next-line react-refresh/only-export-components
export const appThemeContext = createContext<appThemeContextProps | undefined>(undefined)

export const AppThemeProvider = ({children}: {children: ReactNode}) => {
  const savedTheme = localStorage.getItem('theme')
  const [appTheme, setAppTheme] = useState(savedTheme ?? 'ligth')

  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('theme', appTheme)
  })

  return (
    <appThemeContext.Provider value={{appTheme, toggleTheme}}>
      <ThemeProvider theme={appTheme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </appThemeContext.Provider>
  )
}  