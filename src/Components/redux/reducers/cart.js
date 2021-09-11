import produce from 'immer';
import { reduce, map } from 'lodash'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
};

const cart = (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case 'ADD_ITEM_TO_CART':
                if (!draft.items[action.payload.id]) {
                    draft.items[action.payload.id] = []
                }
                draft.items[action.payload.id].push(action.payload);
                break;
            case 'PLUS_ITEM':
                draft.items[action.payload].push(draft.items[action.payload][0]);
                break;
            case 'REMOVE_ITEM':
                delete draft.items[action.payload];
                break;
            case 'CLEAR_CART':
                draft.items = {};
                break;
            case 'MINUS_ITEM':
                if (draft.items[action.payload].length > 1) {
                    draft.items[action.payload].shift();
                    break;
                }
            default:
        }

        const resault = reduce(map(draft.items), (prev, cur) => prev.concat(cur), []);
        draft.totalPrice = resault.reduce((total, obj) => obj.price + total, 0);
        draft.totalCount = resault.length;
    });
};

export { cart };

// const initialState = {
//     items: {},
//     totalPrice: 0,
//     totalCount: 0
// };

// const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0)

// const cart = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_PIZZA_TO_CART': {
//             const currentPizzaItems = !state.items[action.payload.id] ? [action.payload] : [
//                 ...state.items[action.payload.id].items,
//                 action.payload,
//             ]
//             const newItems = {
//                 ...state.items,
//                 [action.payload.id]: {
//                     items: currentPizzaItems,
//                     totalPrice: getTotalPrice(currentPizzaItems)
//                 },
//             };
//             const items = Object.values(newItems).map(obj => obj.items);
//             const allPizzas = [].concat.apply([], items);
//             const totalPrice = getTotalPrice(allPizzas);
//             return {
//                 ...state,
//                 items: newItems,
//                 totalCount: allPizzas.length,
//                 totalPrice
//             };
//         }
//         default:
//             return {
//                 ...state
//             }

//     }
// }
// export { cart };