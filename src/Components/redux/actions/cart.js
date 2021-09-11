const Actions = {
    addToCart: ({ id, type }) => (dispatch, getState) => {
      const pizzas = getState().pizzas.items;
      const pizzaObj = pizzas.find(obj => obj.id === id);
  
      dispatch({
        type: 'ADD_ITEM_TO_CART',
        payload: {
          id: pizzaObj.id,
          imageUrl: pizzaObj.imageUrl,
          name: pizzaObj.name,
          price: pizzaObj.price,
          type,
          objs: pizzaObj
        },
      });
    },
    minusItem: id => ({
      type: 'MINUS_ITEM',
      payload: id,
    }),
    plusItem: id => ({
      type: 'PLUS_ITEM',
      payload: id
    }),
    removeCartItem: id => ({
      type: 'REMOVE_ITEM',
      payload: id
    }),
    clearCart: {
      type: 'CLEAR_CART'
    },
  };

  export default Actions;