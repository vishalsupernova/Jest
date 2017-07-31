const initiaState = { message: false, starships: [] }

function display(state = initiaState, action) {
    switch (action.type) {
        case 'GET_DATA':
            return { ...state, message: action.payload }
        case 'GET_STARSHIPNAME':
            return{...state, message: false, starships: action.payload}
        default: 
            return state
    }
}

export default display