import React, {useEffect, useState} from 'react'
import {Typography, AppBar, Toolbar, Button, Box, Paper } from '@mui/material'
import { Container } from '@mui/system'
import traits from "../data/charTraits"
import genStory from '../data/story'
import axios from 'axios'
import Content from '../components/content'
import details from '../data/storDetails'

const Home = () => {
 const style = {
  toolbar:{
    justifyContent: 'center',
    p: '1rem 0'
  },
  main: {
    padding: '70px 20px 0',
    width: '100%'
  },
  button: { 
    m: "0rem 0 1rem 1rem"
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  topButtons: {
    m: "1rem 0.5rem 0"
  },
  story: {
    p: '1rem'
  }
 }
 const [charTraits, setCharTraits] = useState(traits)
 const [storyDetails, setStoryDetails] = useState(details)
 const [story, setStory] = useState("Click submit to generate story here!")
 const [loading, setLoading] = useState(false)
 const [content, setContent] = useState(0)

 useEffect(() => {
  let dotsInterval;
  if(loading){
    dotsInterval = setInterval(() => {
      setStory((prev) => prev === 'Loading ...' ? 'Loading .' : prev + ".")
    }, 500)
  }
  return () => clearInterval(dotsInterval)
 }, [loading])


 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStory("Loading .")
  try{
    const storyRes = await genStory({charTraits, storyDetails});
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: storyRes,
      model: 'text-davinci-003',
      n: 1,
      max_tokens: 3700,
      temperature: 0.2,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
    });
    setStory(response.data.choices[0].text);
  }catch(err){
    console.log(err);
  } finally {
    setLoading(false)
  }
};
  return (
    <>
    <header>
      <AppBar>
      <Toolbar 
      sx={style.toolbar}
      variant='h1'>
        <Typography>
        Story Book Generator
        </Typography>
      </Toolbar>
      </AppBar>
    </header>

  
    <main style={style.main}>
      <Box>
      <Typography 
      variant='h5'
      component='h1'
      align='center'
      gutterBottom>
        Fill in the Character and Story questionaires and press submit to create your custom AI story!
      </Typography>
      </Box>

      <Container sx={style.container}>
      <Button 
      onClick={() => setContent(0)}
      sx={style.topButtons} 
      variant='outlined'>
        Character</Button>
      <Button 
      onClick={() => setContent(1)}
      sx={style.topButtons} 
      color='success' 
      variant='outlined'>
        Story</Button>
      </Container>

      <Box>
        {content === 0 ?
        <Content
        setData={setCharTraits}
        data={charTraits}
        submit={handleSubmit}
        content={content}
        />
        : <Content
        setData={setStoryDetails}
        data={storyDetails}
        submit={handleSubmit}
        content={content}
        />
        }
      </Box> 
        <Box>
      <Paper sx={style.story}>
        <Typography gutterBottom>
          {story}
        </Typography>
      </Paper>
        </Box>
    </main>
    </>
  )
}

export default Home