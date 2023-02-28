import React, {useState, useEffect} from 'react'
import Info from './info'
import CardComp from './card'
import { Box } from '@mui/material'

const Content = ({data, setData, submit, content}) => {
const style = {
  container: {
    m: '0 1rem 1rem',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (min-width: 600px)': {
      flexDirection: 'row',
      alignItems: 'flex-start'
    },
  }
}

const [count, setCount] = useState(0)

useEffect(() => {
  setCount(0)
 }, [content])

  return (
    <Box sx={style.box} >
    <Box sx={style.container}>
    <CardComp 
    setData={setData}
    data={data}
    content={content}
    count={count}
    setCount={setCount}
    />
  </Box>
  <Box sx={style.container}>
    <Info
    data={data}
    content={content}
    submit={submit}
    setCount={setCount}/>
  </Box>
    </Box>
  )
}

export default Content