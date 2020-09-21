export const getTodoLists = () => {
  const retrievedObject = localStorage.getItem("todolists");
  if (JSON.parse(retrievedObject)) {
    return JSON.parse(retrievedObject);
  } else {
    return [];
  }
};

export const addTodoList = (todoList) => {
  var todoLists = getTodoLists();
  todoLists = {
    ...todoLists,
    todoList,
  };
  localStorage.setItem("todolists", todoLists);
};
