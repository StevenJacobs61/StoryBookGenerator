import React, {useEffect, useState} from 'react'
import {Typography, Button, Box, Paper, Backdrop, CircularProgress } from '@mui/material'
import { Container } from '@mui/system'
import traits from "../data/charTraits"
import genStory from '../data/story'
import axios from 'axios'
import Content from '../components/content'
import details from '../data/storDetails'

const StoryGenerator = () => {
 const style = {
  section: {
    padding: '80px 20px 20px',
    width: '100%',
    justifyContent: 'center',
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
    gap: "1.5rem"
  },
  button: { 
    m: "0 0 1rem 0"
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  topButtons: {
    m: "1rem 0.5rem 0"
  },
  story: {
    p: '1rem',
    border: `1px solid #1976d2`,
    m: "1rem"
  },
  paper: {
    p: "0.5rem",
    "@media (min-width:700px)": {
      width: "600px"
    }
  },
  hdr: {
    fontWeight: '300',
    m: "0.5rem 2rem 0rem",
    opacity: '0.7'
  }
 }

 const [charTraits, setCharTraits] = useState(traits)
 const [storyDetails, setStoryDetails] = useState(details)
 const [story, setStory] = useState("Click submit to generate story here")
 const [loading, setLoading] = useState(false)
 const [open, setOpen] = useState(false)
 const [content, setContent] = useState(0)


//  Loading effect
 useEffect(() => {
  let dotsInterval;
  if(loading){
    dotsInterval = setInterval(() => {
      setStory((prev) => prev === 'Loading ...' ? 'Loading .' : prev + ".")
    }, 500)
  }
  return () => clearInterval(dotsInterval)
 }, [loading])

// Post data to ChatGPT
 const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setOpen(true);
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
    setOpen(false)
  }
};
  return (
    <section style={style.section}>
      <Box>
      <Typography 
      sx={style.hdr}
      variant='p'
      component='p'
      align='center'
      gutterBottom>
        To generate a unique story simply hit sumit below. <br/> You may also customise the story by completing some, or all, of the questions.
      </Typography>
      </Box>

      <Paper sx={style.paper}>
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
        <Box sx={style.container}>
          <Button onClick={handleSubmit} sx={style.button} variant='contained'>Submit</Button>
        </Box>
          <Box>
        <Paper sx={style.story} elevation={0}>
          <Typography gutterBottom align='center'>
            {story}
          </Typography>
        </Paper>
          </Box>
      </Paper>
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open={open}
  onClick={() => setOpen(false)}
>
  <CircularProgress color="inherit" />
</Backdrop>
    </section>
  )
}

export default StoryGenerator