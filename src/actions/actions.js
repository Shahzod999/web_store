import axios from "axios";

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get("https://dummyjson.com/products/", {
      params: { limit: 30 },
    });
    dispatch({ type: "FETCH_PRODUCTS", payload: response.data.products });
  } catch (error) {
    console.log("Erro while fetching", error);
  }
};

export const addToShop = (product) => ({
  type: "ADD_TO_SHOP",
  payload: product,
});

export const dispatchDelete = () => ({
  type: "DELETE_SHOP_STORE",
});
