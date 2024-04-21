import React from 'react'

const SearchTask = ({search,setSearch}) => {
    return (
        <form className='searchForm'>
            <input type="text" 
                placeholder='Search'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchTask