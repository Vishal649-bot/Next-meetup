import React from 'react'
import MeetupList from "../components/meetups/MeetupList";
import Layout from '../components/layout/Layout'
const Dummy_MeetUps = [
{
    id: 'm1',
    title: 'A First Meetup',
    image: 'https://www.gotokyo.org/en/plan/tokyo-outline/images/main.jpg',
    address: "Some Address 5, 12345 some City",
    description: 'This is a first meetups'
},
{
    id: 'm2',
    title: 'A Second Meetup',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwdpgXV3vQedMHDpNPOgMPBYVGCgDz5ih_A&s',
    address: "Some Address 5, 12345 some City",
    description: 'This is a second meetups'
},
]
const HomePage = () => {
  return (
      <div>
        <MeetupList meetups= {Dummy_MeetUps}/>
    </div> 
  )
}

export default HomePage
