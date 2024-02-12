
import React from 'react'
import NewMeetuoPage from '../../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {
    function addMeetupHandler(enteredMeetupData){
console.log(enteredMeetupData);
    }
  return (
    <div>
      <NewMeetuoPage onAddMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeetupPage

