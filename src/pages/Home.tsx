import { AvatarsList, CardComponent, CustomTable, Header } from '@/components'
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

  const mockTableData = {
    headers: ['Name', 'Email', 'Actions'],
    rows: [
      [
        <span>Nome 1</span>,
        <span>nome1@email.com</span>,
        <button>ACTION</button>
      ],
      [
        <span>Nome 2</span>,
        <span>nome2@email.com</span>,
        <button>ACTION</button>
      ],
      [
        <span>Nome 3</span>,
        <span>nome3@email.com</span>,
        <button>ACTION</button>
      ]
    ]
  }

  return (
    <>
      <Header />
        <Container maxWidth="lg">
          <CardComponent>CARD</CardComponent>
          <CardComponent>
            <AvatarsList listData={mockListData}/>
          </CardComponent>
          <CardComponent>
            <CustomTable headers={mockTableData.headers} rows={mockTableData.rows}/>
          </CardComponent>
        </Container>  
      </>
  )
}

export default Home   
