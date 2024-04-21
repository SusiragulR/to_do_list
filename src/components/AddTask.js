import React from 'react'

const AddTask = ({newItem,setNewItem,handleSubmit,inputRef}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className='addForm'>
                <input 
                    type="text" 
                    id="addItem"
                    autoFocus
                    ref={inputRef}
                    placeholder='Task to be added'
                    required
                    value={newItem}
                    onChange={(e)=>setNewItem(e.target.value)}
                />
                <button
                    type='submit'
                    className='addButton'
                    onClick={()=>inputRef.current.focus()}
                >Add
                </button>
            </div>
        </form>
    )
}

export default AddTask