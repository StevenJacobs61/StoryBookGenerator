import { List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Info = ({charTraits}) => {
    function formatCamelCase(camelCaseString) {
        const formattedString = camelCaseString.replace(/([A-Z])/g, ' $1');
        return formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
      }
      const style = {
        hdr: {
            m: '1rem 0 0',
            fontWeight: "400"
        }
      }
      

  return (
    <div>
        <Typography variant='h6' sx={style.hdr}>Your Character's traits</Typography>
        <List>
            {Object.keys(charTraits).map((key, index) => 
            <ListItem key={index}>
                <ListItemText primary={formatCamelCase(key)} secondary={charTraits[key]}/>
            </ListItem>
            )}
        </List>
    </div>
  )
}

export default Info