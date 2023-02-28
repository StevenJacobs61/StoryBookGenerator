import { List, ListItem, ListItemText, Card, CardHeader, CardContent, CardActions, Button } from '@mui/material'
import React from 'react'

const Info = ({data, submit, setCount, content}) => {
    function formatCamelCase(camelCaseString) {
        const formattedString = camelCaseString.replace(/([A-Z])/g, ' $1');
        return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
      }
      const style = {
        hdr: {
            m: '1rem 0 0',
            fontWeight: "400"
        },
        button: {
          m: ' 0 1rem 1rem'
        },
        card: {
          width: 'fit-content',
          m: '1.5rem 0',
          maxHeight: '500px',
          overflowY: 'scroll'
        },
        listItem: {
          cursor: 'pointer'
        }
      }
      

  return (
    <Card sx={style.card}>
      <CardHeader title={content === 0 ? "Your Character's Traits" : "Your Story's Details"}/> 
      <CardContent>
      <List>
            {Object.keys(data).map((key, index) => 
            <ListItem key={index} sx={style.listItem} onClick={()=> setCount(index)}>
                <ListItemText primary={formatCamelCase(key)} secondary={data[key]}/>
            </ListItem>
            )}
        </List>
      </CardContent>
      <CardActions>
        <Button onClick={submit} sx={style.button} variant='contained'>Submit</Button>
      </CardActions>
    </Card>
  )
}

export default Info