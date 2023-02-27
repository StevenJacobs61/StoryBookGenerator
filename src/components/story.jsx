import React from 'react'
import { Container } from '@mui/material'
import CardComp from './card'
import Info from './info'

const Story = ({data, setData}) => {
  return (
    <>
    <Container>
    <CardComp 
    setData={setData}
    data={data}
    content={1}
    />
  </Container>
  <Container>
    <Info
    data={data}
    content={1}/>
  </Container>
    </>
  )
}

export default Story