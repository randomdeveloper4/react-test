
const currentState = {
    counter : 0,
    isLoggedIn : false
}

const reducer = (state = currentState, action) => {

    console.log(state);

    console.log(action)

    if(action.type == 'INCREMENT') {
        return {
            ...state,
            counter : state.counter + 1
        };
    }
    
    if (action.type == 'LOGGEDIN') {
        return {
            ...state,
            isLoggedIn : !state.isLoggedIn
        };
    }

    return state;
}

export default reducer;