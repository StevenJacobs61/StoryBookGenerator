import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styled } from '@mui/system'

const Home = () => {
  const CustomBox = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing(4),
    marginTop: theme.spacing(5),
    width: '300px'
  }))
  const Title = styled(Typography)(({theme}) => ({
    color: '#0009',
    writingMode: 'vertical-rl',
    p: '1rem',
    letterSpacing: theme.spacing(0.5),
    fontWeight: '300',
    opacity: '0.5',
    background: 'linear-gradient(to right, #1976d2, #1939)',
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: 'transparent',
    
  }))
  const Text = styled(Typography)(({theme}) => ({
    fontWeight: '300',
    m: ' 0 1rem 1rem',
    textAlign: 'right',
    opacity: 0.7
  }))
  const style = {
    section:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    },
  }

  return (
    <section style={style.section}>
        <CustomBox display='flex'>
        <Title variant='h1'>Welcome!</Title>
        <Text
        variant='h5'
        sx={style.info}>
          Use our free AI tool to make text generation easier
          <br/>
          <br/>
          AI Imagination utilises OpenAI's API to provide your results
          <br/>
          <br/>
          Enjoy.
        </Text>
        {/* </Paper> */}
        </CustomBox>
    </section>
  )
}

export default Home