import React from 'react'
import Info from './info'
import CardComp from './card'
import { Container } from '@mui/material'

const Character = ({data, setData}) => {
  return (
    <>
    <Container>
    <CardComp 
    setData={setData}
    data={data}
    content={0}
    />
  </Container>
  <Container>
    <Info
    data={data}
    content={0}/>
  </Container>
    </>
  )
}

export default Character