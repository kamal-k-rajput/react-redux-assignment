// create a action 

export const ADD_TODO = "ADD_TODO";
export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};