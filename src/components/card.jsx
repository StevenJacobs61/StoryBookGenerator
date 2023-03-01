
import { Button, Card, CardActions, CardContent, CardHeader, Input } from '@mui/material'
import React, { useEffect, useState } from 'react'
import characterQuestions from '../data/charQuestions'
import traits from '../data/charTraits'
import storyQuestions from '../data/storQuestions'


const CardComp = ({content, count, setCount, data, setData}) => {
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

    const [keys, setKeys] = useState(Object.keys(data))
    const [answer, setAnswer] = useState('')

    useEffect(() =>{
        setQuestiions(()=> content === 0 ? characterQuestions : storyQuestions)
    }, [content])
    useEffect(() => {
        setKeys(Object.keys(data));
      }, [data]);

      function handleClick(add) {
        const newIndex = add ? count + 1 : count - 1;
        const lastQuestionIndex = questions.length - 1;
        const newCount = newIndex < 0 ? lastQuestionIndex : newIndex % (lastQuestionIndex + 1);
        setCount(newCount);
      }
      
    
        function handleSubmit(e) {
            e.preventDefault();
            const currentKey = keys[count];
            const updatedData = { ...data };
            updatedData[currentKey] = answer;
            setData(updatedData);
            traits[keys[count]] = answer;
            setAnswer('');
          }
          
  return (
    <div style={style.container}>
    <Card sx={style.card}>
        <CardHeader 
        title={questions[count].question+'?'}
        subheader={questions[count].label}/>
        <CardContent>
            <Input 
            onChange={(e)=>setAnswer(e.target.value)} value={answer}
            onKeyDown={((e) => {
                if(e.key === 'Enter'){
                    handleSubmit(e);
                    handleClick(true)
                }
            })}/>
        </CardContent>
        <CardActions sx={style.actions}>
            <Button 
            color='secondary'
            onClick={()=>{handleClick(false); setAnswer('')}}
            >Back
            </Button>
            <Button
            color='success'
            onClick={(e)=>{handleClick(true); handleSubmit(e)}}
            >Submit</Button>
            <Button
            onClick={()=>{handleClick(true); setAnswer('')}}
            >Next
            </Button>
        </CardActions>
    </Card>
    </div>
  )
}

export default CardComp