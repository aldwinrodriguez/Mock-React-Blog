function decreaseClapReducer(state, action) {
    console.log(state);
    console.log('ha');
    // TODO figure out how to add decreaseClap
    switch (action.type) {
        case 'decreaseClap':
            return state - 1;
        default:
            return state;
    }
}

export default decreaseClapReducer;