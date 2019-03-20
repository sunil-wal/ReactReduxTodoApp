import axios from 'axios'
const apiUrl = 'https://57b1924b46b57d1100a3c3f8.mockapi.io/api/todos'
let nextTodoId = 100

export const addTodo = text => {
    return (dispatch) => {
        return axios.post(apiUrl, {text})
          .then(response => {
            dispatch(addTodoSuccess(response.data))
          })
          .catch(error => {
            throw(error);
          });
      };
}
export const addTodoSuccess = data => ({
    type: 'ADD_TO_DO',
    id: data.id || nextTodoId++,
    text: data.text
})
export const removeTodo = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
          .then(response => {
            dispatch(removeTodoSuccess(response.data))
          })
          .catch(error => {
            throw(error);
          });
      };
};
export const removeTodoSuccess = data => ({
    type: 'REMOVE_TO_DO',
    id: data.id
});

export const fetchTodos = (data) => {
    return {
      type: 'FETCH_TODOS',
      data
    }
  };
  
  export const fetchAllTodos = () => {
    return (dispatch) => {
      return axios.get(apiUrl)
        .then(response => {
          dispatch(fetchTodos(response.data))
        })
        .catch(error => {
          throw(error);
        });
    };
  };
export const actionTypes = {
    ADD_TO_DO : 'ADD_TO_DO',
    REMOVE_TO_DO : 'REMOVE_TO_DO',
    FETCH_TODOS : 'FETCH_TODOS'
}

