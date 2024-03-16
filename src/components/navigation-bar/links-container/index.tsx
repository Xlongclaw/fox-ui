import React from 'react'
import { Link } from 'react-router-dom'

const LinksContainer = () => {
  return (
    <div className='flex gap-6 mr-4'>
      <Link to={'/application'} className='text-[14px] hover:text-ascent'>Components</Link>
      <a className='text-[14px]  hover:text-ascent' href="">Pricing</a>
    </div>
  )
}

export default LinksContainer