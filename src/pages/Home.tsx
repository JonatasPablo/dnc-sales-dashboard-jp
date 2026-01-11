import { AvatarsList, CardComponent, Header } from '@/components'
import { Container } from '@mui/material'
import { currencyConverter } from '@/utils'

function Home() {
  const mockListData = [
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 1',
      subtitle: currencyConverter(1000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 2',
      subtitle: currencyConverter(2000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 3',
      subtitle: currencyConverter(3000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 4',
      subtitle: currencyConverter(4000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 5',
      subtitle: currencyConverter(5000),
    },
    {
      avatar: '/dnc-avatar.svg',
      name: 'Nome Sobrenome 6',
      subtitle: currencyConverter(6000),
    },
  ]
  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <CardComponent>CARD</CardComponent>
          <CardComponent>
            <AvatarsList listData={mockListData}/>
          </CardComponent>
        </Container>  
      </>
  )
}

export default Home   
