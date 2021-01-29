export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((acc, item) => acc + item.price, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (item) => item.id === action.payload
      );
      let basketItems = [...state.basket];
      basketItems.splice(index, 1);
      return {
        ...state,
        basket: basketItems,
      };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
