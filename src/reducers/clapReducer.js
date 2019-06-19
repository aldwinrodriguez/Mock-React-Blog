function clapReducer(state = 0, action) {
    switch (action.type) {
        case 'addClap':
            return state + 1;
        case 'decreaseClap':
            return state <= 0 ? 0 : state - 1;
        default:
            return state;
    }
}

export default clapReducer;