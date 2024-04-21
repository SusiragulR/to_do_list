import React from "react";
import SearchTask from "../components/SearchTask";
import Content from "../components/Content";

const CompletedTasks = (props) => {

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
                printIfEmpty="0 tasks have been completed"
                items={items.filter(
                (item) =>
                    item.todo.toLowerCase().includes(search.toLowerCase()) &&
                    item.checked === true
                )}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
                mode={mode}
            />
        </div>
    );
};

export default CompletedTasks;
