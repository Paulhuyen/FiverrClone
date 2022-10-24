import React from 'react'
import GigsProfile from './GigsProfile'
import InfoProfile from './InfoProfile'

type Props = {}

export default function Profile({}: Props) {
  return (
    <div className='container'>
      <div className="row">
        <InfoProfile/>
        <GigsProfile/>
      </div>

    </div>
  )
}