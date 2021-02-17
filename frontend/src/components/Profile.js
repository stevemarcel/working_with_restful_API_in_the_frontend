import React from 'react'
import { Card } from 'react-bootstrap'

const Profile = ({profile}) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <a href={`/profile/${profile.UserName}`}>
          <Card.Title>{profile.UserName}</Card.Title>
        </a>
      </Card>
    </>
  )
}

export default Profile
