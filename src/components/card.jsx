
import { Button, Card, CardActions, CardContent, CardHeader, Input, Typography } from '@mui/material'
import React, { useState, useRef } from 'react'
import characterQuestions from '../data/charQuestions'


const CardComp = ({setCharTraits, charTraits}) => {
    const style = {
        card: {
            maxWidth: 'max-content',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            margin: '1.5rem 0 0'
        },
        action: {
            justifyContent: 'center',
        }
    }

    const [count, setCount] = useState(0)
    const [keys, setKeys] = useState(Object.keys(charTraits))
    const [answer, setAnswer] = useState()

    function handleClick(add){
        if(add && count >= characterQuestions.length - 1){
            setCount(0)
        } else if(!add && count === 0) {
            setCount(characterQuestions.length - 1)
        }else if(add && count < characterQuestions.length - 1){
            setCount(count + 1)
        }
        else{
            if(count < 1) return;
            else{
                setCount(count - 1)
            }
        }}
    
        function handleSubmit(e){
            e.preventDefault()
            const updatedTraits = { ...charTraits };
            updatedTraits[keys[count]] = answer;
            setCharTraits(updatedTraits);
            setAnswer('')
          }

  return (
    <div style={style.container}>
    <Card sx={style.card}>
        <CardHeader 
        title={characterQuestions[count].question+'?'}
        subheader={characterQuestions[count].label}/>
        <CardContent>
            <Input onChange={(e)=>setAnswer(e.target.value)} value={answer}/>
        </CardContent>
        <CardActions sx={style.actions}>
            <Button 
            color='secondary'
            onClick={()=>handleClick(false)}
            >Back
            </Button>
            <Button
            color='success'
            onClick={(e)=>{handleClick(true); handleSubmit(e)}}
            >Submit</Button>
            <Button
            onClick={()=>handleClick(true)}
            >Next
            </Button>
        </CardActions>
    </Card>
    </div>
  )
}

export default CardComp