// create a action

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};

export const toggletodo = (data) => {
  return {
    type: TOGGLE_TODO,
    payload: data,
  };
};
