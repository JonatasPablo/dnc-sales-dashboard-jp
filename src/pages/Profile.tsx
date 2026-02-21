import { useContext } from 'react'
import {CardComponent, Header, StyledButton } from '@/components'
import { appThemeContext } from '@/contexts/AppThemeContext'

function Profile() {
  const themeContext = useContext(appThemeContext)
  return (
    <>
      <Header /> 
        <CardComponent>
          <StyledButton className='primary' onClick={themeContext?.toggleTheme}>
            Trocar para Tema {' '} 
            {themeContext?.appTheme === 'light' ? 'escuro' : 'claro'}
          </StyledButton>
        </CardComponent>
    </>
  )
}

export default Profile
