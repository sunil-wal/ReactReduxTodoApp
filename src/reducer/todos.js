const todos = (state = [], action) => {
    console.log(action)
    console.log(state)

    switch(action.type){
        case 'ADD_TO_DO':
        return ([
            ...state,
            {
                text: action.text,
                id: action.id
            }
        ])
        case 'REMOVE_TO_DO':
        return state.filter(todo => todo.id !== action.id)
        case 'FETCH_TODOS':
        return action.data
        default:
            return state;
    }
}

export default todos