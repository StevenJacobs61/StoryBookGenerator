import React from 'react'

const genStory = (answers) => {
    const {
        name, 
        age, 
        born, 
        lives, 
        eyeColor, 
        hairColor,
        extraDetails, 
        specialAbility, 
        relations, 
        hobby, 
        height, 
        gender
    } = answers;
  return (
  `Write a short story which includes the following character - Name: ${name},
   Age: ${age}, Born: In ${born}, Lives: In ${lives}, Eye-Color: ${eyeColor}, Hair-Color:${hairColor},
   Height: ${height}, Hobby: ${hobby}, Gender: ${gender}, Special Ability: ${specialAbility},
   Extra Details: ${extraDetails}.`
  )
}

export default genStory