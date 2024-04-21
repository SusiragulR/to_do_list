import React from 'react'

const Header = ({mode}) => {
    return (
        <header className={`header ${mode}`}>
            To-do List
        </header>
    )
}

export default Header