import React, {useState} from 'react'
import {Typography, AppBar, Toolbar, Button } from '@mui/material'
import CardComp from '../components/card'
import { Container } from '@mui/system'
import Info from '../components/info'
import traits from "../data/charTraits"
import genStory from '../data/story'
import axios from 'axios'

const Home = () => {
 const style = {
  toolbar:{
    justifyContent: 'center',
    p: '1rem 0'
  },
  main: {
    padding: '70px 0 0'
  },
  button: { 
    m: "0 0 1rem 0.5rem"
  }
 }
 const [charTraits, setCharTraits] = useState(traits)
 const [story, setStory] = useState("Story will generate here")

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStory("loading...")
  try{
    const storyRes = await genStory(charTraits);
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: storyRes,
      model: 'text-davinci-003',
      n: 1,
      max_tokens: 1000,
      temperature: 0.1,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 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`,
      },
    });
    console.log(response);
    setStory(response.data.choices[0].text);
    console.log(story);

  }catch(err){
    console.log(err);
  }
};
 
  return (
    <>
    <AppBar>
      <Toolbar 
      sx={style.toolbar}
      variant='h1'>
      <Typography>
        Story Book Generator
      </Typography>
      </Toolbar>
    </AppBar>
    <main style={style.main}>
      <Typography 
      variant='h5'
      component='h1'
      align='center'
      gutterBottom>
        Fill in the questionaire to start creating your custom AI story!
      </Typography>
      <Container>
        <CardComp 
        setCharTraits={setCharTraits}
        charTraits={charTraits}
        />
      </Container>
      <Container>
        <Info
        charTraits={charTraits}/>
      </Container>
      <Container>
       <Button 
       variant='contained' 
       sx={style.button}
       onClick={(e) =>handleSubmit(e)}>
          Submit
       </Button>
      </Container>
      <Container>
        <Typography>
          {story}
        </Typography>
      </Container>
    </main>
    </>
  )
}

export default Home