export const getTodoLists = () => {
  const retrievedObject = window.localStorage.getItem("todolists");
  if (retrievedObject !== null) {
    return JSON.parse(retrievedObject);
  }
  return [];
};

export const getTodoList = (id) => {
  const lists = getTodoLists();
  if (typeof lists[id] !== "undefined" && lists[id] !== null) {
    if (typeof lists[id].todos !== "undefined" && lists[id].todos !== null) {
      return lists[id].todos;
    }
  }
  return [];
};

export const addTodoList = (todoList) => {
  var todoLists = getTodoLists();
  todoLists = [...todoLists, todoList];
  saveToLocalStorage(todoLists);
};

export const addTodoToList = (listId, content) => {
  var todoLists = getTodoLists();
  if (typeof todoLists[listId] !== "undefined" && todoLists[listId] !== null) {
    if (typeof todoLists[listId].todos === "undefined") {
      todoLists[listId].todos = [content];
    } else {
      todoLists[listId].todos.push(content);
    }
  }
  saveToLocalStorage(todoLists);
};

export const completeTodoInList = (listId, todoId) => {
  console.log(`completing todo ${todoId} in list ${listId}`);
  var todoLists = getTodoLists();
  if (typeof todoLists[listId] !== "undefined" && todoLists[listId] !== null) {
    if (typeof todoLists[listId].todos !== "undefined") {
      console.log(`béka`);
      todoLists[listId].todos = todoLists[listId].todos.filter(
        (todoitem, index) => {
          console.log(`${index} - ${todoitem}`);
          return index !== todoId;
        }
      );
    }
  }
  saveToLocalStorage(todoLists);
};

const saveToLocalStorage = (todoLists) => {
  window.localStorage.setItem("todolists", JSON.stringify(todoLists));
};
