import React from "react";
import AddTask from "../components/AddTask";
import SearchTask from "../components/SearchTask";
import Content from "../components/Content";

const Home = (props) => {
    const {
        items,
        newItem,
        setNewItem,
        handleSubmit,
        inputRef,
        search,
        setSearch,
        handleCheck,
        handleDelete,
        mode
    } = props;

    return (
        <div>
        <AddTask
            newItem={newItem}
            setNewItem={setNewItem}
            handleSubmit={handleSubmit}
            inputRef={inputRef}
        />

        <SearchTask search={search} setSearch={setSearch} />

        <Content
            printIfEmpty="Your list is empty"
            items={items.filter((item) =>
            item.todo.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            mode={mode}
        />
        </div>
    );
};

export default Home;
