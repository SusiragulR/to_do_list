import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Nav = ({setMode}) => {
    return (
        <nav className="nav">
            
            <Link to='/' className='links'><div id="home">Home</div></Link>      
                    
            <div id="options">
                Options
                <div className='dropdown-content'>
                    <Link to='/completed' className='links'>
                        <p 
                            className='dropdown-option'
                        >Show completed tasks</p>
                    </Link>

                    <Link to='/pending' className='links'>
                        <p 
                            className='dropdown-option'
                        >Show pending tasks</p>
                    </Link>

                </div>
            </div>
            <Outlet />

            <div id="view">
                View
                <div className='dropdown-content'>
                    <p 
                        className='dropdown-option'
                        onClick={()=>(setMode('dark'))}
                    >Dark mode</p>

                    <p 
                        className='dropdown-option'
                        onClick={()=>(setMode('light'))}
                    >Light mode</p>
                </div>
            </div>

        </nav>
    )
}

export default Nav