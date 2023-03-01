import React from 'react'

const genStory = ({charTraits, storyDetails }) => {
    const {
        name, 
        age, 
        from, 
        eyeColor, 
        hairColor,
        extraDetails, 
        specialAbility, 
        relations, 
        hobby, 
        height, 
        pronouns,
    } = charTraits;
    const {
      length,
      intendedAge,
      genre,
      plot,
      moral, 
      location, 
      extraStoryDetails,
    } = storyDetails;
  return (
  `Write a short story which includes the following character -> Name: ${name},
   Age: ${age} years old, Charcter is from: ${from}, Eye-Color: ${eyeColor}, Hair-Color:${hairColor},
   Height: ${height}, Hobby: ${hobby}, Pronouns: ${pronouns}, Special Ability: ${specialAbility},
   Extra Details: ${extraDetails}. Include these following details of the story -> Length: ${length}. Intended Age: ${intendedAge}
   , remeber to make sure this story is age appropriate 
   for the age specified here, in terms of literacy ability, 
   as well as age appropriateness for content. Genre of the story: ${genre}. 
   General Plot Line of the story: ${plot}. Moral of the story: ${moral}, make sure the story
   is such that it teaches this moral. Location of the story: ${location}.
    Extra Story-Details: ${extraStoryDetails}. P.S DO NOT LIST THESE DETAILS AT THE START OF THE STORY, JUST START WITH THE STORY ITSELF!`
  )
}
export default genStory