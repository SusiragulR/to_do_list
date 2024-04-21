import React from 'react'
import {Outlet, Link} from 'react-router-dom'

const Missing = () => {
  return (
    <main className='Missing'>
        <h1>Page not found</h1>
        <p>Well that's disappointing</p>
        <p>Visit our <Link to="/" style={{textDecoration:"none",color:'steelblue'}}>Homepage</Link></p>
        <Outlet />
    </main>
  )
}

export default Missing