
import React from 'react'
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
  return (
    <div>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />

    </div>
  )
}

export default MeetupDetails


