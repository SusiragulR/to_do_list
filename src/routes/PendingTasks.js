import React from "react";
import SearchTask from "../components/SearchTask";
import Content from "../components/Content";

const PendingTasks = (props) => {
    const { 
        items, 
        search, 
        setSearch, 
        handleCheck, 
        handleDelete, 
        mode 
    } = props;

    return (
        <div>
        <SearchTask search={search} setSearch={setSearch} />

        <Content
            printIfEmpty="No pending tasks"
            items={items.filter(
            (item) =>
                item.todo.toLowerCase().includes(search.toLowerCase()) &&
                item.checked === false
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            mode={mode}
        />
        </div>
    );
};

export default PendingTasks;
