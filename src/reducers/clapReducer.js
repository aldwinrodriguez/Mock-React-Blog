function clapReducer(state = 0, action) {
    switch (action.type) {
        case 'addClap':
            return state + 1;
        default:
            return state;
    }
}

export default clapReducer;