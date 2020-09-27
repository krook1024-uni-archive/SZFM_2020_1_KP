import React from "react";
import createPersistedReducer from "use-persisted-reducer";

const TodoStateContext = React.createContext();
const TodoDispatchContext = React.createContext();
const usePersistedReducer = createPersistedReducer("asdasdasd123");

const todoReducer = (state, action) => {
  switch (action.type) {
    case "add_list": {
      return {
        ...state,
        lists: [...state.lists, action.payload],
      };
    }
    case "add_item": {
      let lists = state.lists;
      let list = lists[action.payload.listId];
      list.todos = [...list.todos, action.payload.item];
      return {
        ...state,
        lists,
      };
    }
    case "delete_item": {
      let lists = state.lists;
      let list = lists[action.payload.listId]
      const newList = list.todos.filter((item,index) => index !== action.payload.itemId)
      list.todos = newList
      return{
        ...state,
        lists,
      };
    }
    case "complete_item": {
      let lists = state.lists;
      let list = lists[action.payload.listId];
      let todos = list.todos;
      todos[action.payload.itemId].completed = true;
      return {
        ...state,
        lists,
      };
    }
    case "set_current": {
      return {
        ...state,
        current: action.payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const TodoProvider = ({ children }) => {
  const [state, dispatch] = usePersistedReducer(todoReducer, {
    lists: [],
    current: -1,
  });
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

const useTodoState = () => {
  const context = React.useContext(TodoStateContext);
  if (context === undefined) {
    throw new Error("useTodoState must be used within a TodoProvider");
  }
  return context;
};

const useTodoDispatch = () => {
  const context = React.useContext(TodoDispatchContext);
  if (context === undefined) {
    throw new Error("useTodoDispatch must be used within a TodoProvider");
  }
  return context;
};

export { TodoProvider, useTodoState, useTodoDispatch };
