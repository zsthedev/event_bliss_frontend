import { server } from "../store";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      `${server}/login`,
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loginFail", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get(
      `${server}/me`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "loadUserSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data.message });
  }
};

export const register = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });

    const { data } = await axios.post(`${server}/register`, formData, {
      headers: {
        "Content-Type": "multiparts/form-data",
      },

      withCredentials: true,
    });

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });

    const { data } = await axios.get(
      `${server}/logout`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.message });
  }
};

export const createCheckout = (id) => async (dispatch) => {
  try {
    dispatch({ type: "eventPaymentRequest" });

    const { data } = await axios.post(
      `${server}/create_checkout/${id}`,
      {},

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "eventPaymentSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "eventPaymentFail",
      payload: error.response.data.message,
    });
  }
};

export const addToCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: "addToCartRequest" });

    const { data } = await axios.put(
      `${server}/addtocart/${id}`,
      {},

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "addToCartSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "addToCartFail",
      payload: error.response.data.message,
    });
  }
};

export const removeFromCart = (id) => async (dispatch) => {
  try {
    dispatch({ type: "removeFromCartRequest" });

    const { data } = await axios.delete(
      `${server}/removefromcart/${id}`,

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "removeFromCartSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "removeFromCartFail",
      payload: error.response.data.message,
    });
  }
};

export const createCartCheckout = () => async (dispatch) => {
  try {
    dispatch({ type: "cartCheckoutRequest" });

    const { data } = await axios.post(
      `${server}/create_cart_checkout`,
      {},

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "cartCheckoutSuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "cartCheckoutFail",
      payload: error.response.data.message,
    });
  }
};

export const makeCartEmpty = () => async (dispatch) => {
  try {
    dispatch({ type: "makeCartEmptyRequest" });

    const { data } = await axios.put(
      `${server}/cartempty`,
      {},

      {
        headers: {
          "Content-Type": "application/json",
        },

        withCredentials: true,
      }
    );

    dispatch({ type: "makeCartEmptySuccess", payload: data });
  } catch (error) {
    dispatch({
      type: "makeCartEmptyFail",
      payload: error.response.data.message,
    });
  }
};

export const getCartItems = () => async (dispatch) => {
  try {
    dispatch({ type: "getCartRequset" });

    const { data } = await axios.get(`${server}/cart`, {
      headers: {
        "Content-Type": "application/json",
      },

      withCredentials: true,
    });

    dispatch({ type: "getCartSuccess", payload: data.cart });
  } catch (error) {
    dispatch({
      type: "getCartFail",
      payload: error.response.data.message,
    });
  }
};
