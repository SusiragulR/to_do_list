import './index.css';
import { useRef, useState } from "react";
import { Routes,Route } from 'react-router-dom';

import addToStorage from './hooks/addToStorage';

import Home from './routes/Home';
import PendingTasks from './routes/PendingTasks';
import CompletedTasks from './routes/CompletedTasks';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Missing from './components/Missing';

function App() { 

    const [items,setItems] = useState(JSON.parse(localStorage.getItem("todo_list")) || []);
    const [search,setSearch]= useState('');
    const [newItem,setNewItem] = useState('');
    const [mode,setMode] = useState('dark');

    const inputRef = useRef();

    const handleCheck = (id) => {
        const listItems = items.map((item)=>
        (item.id===id) ? {...item,checked:!item.checked} : item)
        setItems(listItems);
        addToStorage(listItems);
    }

    const handleDelete = (id) => {
        const listItems = items.filter((item)=>(item.id!==id))
        setItems(listItems);
        addToStorage(listItems);
    }

    const handleAdd=(todo)=>{
        const id= items.length ? items[items.length-1].id+1 : 1;
        const addNewItem={id, checked:false, todo};
        const listItems=[...items,addNewItem]
        setItems(listItems);
        addToStorage(listItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd(newItem)
        setNewItem('')
    }
    
    return (
        <div className="App">
            <div className={`body ${mode}`}>                       
                <Header mode={mode}/>

                <Nav 
                    setMode={setMode}
                />

                <Routes>
                    <Route path='/' element={
                        <Home 
                            items = {items}
                            setItems = {setItems}
                            newItem = {newItem}
                            setNewItem = {setNewItem}
                            handleSubmit={handleSubmit}
                            inputRef={inputRef}
                            search={search}
                            setSearch={setSearch}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            mode={mode}
                        />
                    }/>               
                
                    <Route path='/completed' element={
                        <CompletedTasks
                            items = {items}
                            search={search}
                            setSearch={setSearch}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            mode={mode}
                        />
                    }/>

                    <Route path='/pending' element={
                        <PendingTasks 
                            items = {items}
                            search={search}
                            setSearch={setSearch}
                            handleCheck={handleCheck}
                            handleDelete={handleDelete}
                            mode={mode}
                        />
                    }/>

                    <Route path='*' element={<Missing />} />
                </Routes>
            </div>

            <Footer />
        </div>
    ); 
}

export default App;

