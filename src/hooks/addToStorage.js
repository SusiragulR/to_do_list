const addToStorage = (listItems) => {
    localStorage.setItem("todo_list",JSON.stringify(listItems))
}

export default addToStorage