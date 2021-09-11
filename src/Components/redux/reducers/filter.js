const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc'
    },
};

const filter = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SORTBY':
            return {
                ...state,
                sortBy: action.payload,
            }
        case 'SET_CATEGORY':
            return {
                ...state,
                category: action.payload,
            }
        default:
            return state;
    }
}
export { filter };