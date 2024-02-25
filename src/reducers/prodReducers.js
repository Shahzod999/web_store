const initialState = {
  products: [],
  shop: [],
};

const prodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_SHOP":
      return {
        ...state,
        shop: [...state.shop, action.payload],
      };
    case "DELETE_SHOP_STORE":
      return {
        ...state,
        shop: [],
      };
    default:
      return state;
  }
};

export default prodReducer;
