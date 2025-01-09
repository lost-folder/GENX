import React from 'react'
import { Link } from 'react-router-dom'

export const ErrPage = () => {
  return (
    <div className='not-found'>
        <h2> Sorry</h2>
        <p>Page cannot be found</p>
        <Link to="/">
            <button>back to Home Page</button>
        </Link>
    </div>
  )
}
