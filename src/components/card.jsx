
import { Button, Card, CardActions, CardContent, CardHeader, Input } from '@mui/material'
import React, { useState } from 'react'
import characterQuestions from '../data/charQuestions'
import storyQuestions from '../data/storQuestions'


const CardComp = ({setData, data, content}) => {
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
    const [questions, setQuestiions] = useState(() => content === 0 ? characterQuestions : storyQuestions)

    const [count, setCount] = useState(0)
    const [keys, setKeys] = useState(Object.keys(data))
    const [answer, setAnswer] = useState('')

    function handleClick(add){
        if(add && count >= questions.length - 1){
            setCount(0)
        } else if(!add && count === 0) {
            setCount(questions.length - 1)
        }else if(add && count < questions.length - 1){
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
            const updatedData = { ...data };
            updatedData[keys[count]] = answer;
            setData(updatedData);
            setAnswer('')
          }

  return (
    <div style={style.container}>
    <Card sx={style.card}>
        <CardHeader 
        title={questions[count].question+'?'}
        subheader={questions[count].label}/>
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