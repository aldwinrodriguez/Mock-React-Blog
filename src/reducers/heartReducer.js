function heartReducer(state = 0, action) {
    switch (action.type) {
        case 'addHeart':
            return state + 1;
        default:
            return state;
    }
}

export default heartReducer;