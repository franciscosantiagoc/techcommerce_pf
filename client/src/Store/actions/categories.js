import { GET_CATEGORIES, GET_CATEGORIES_FOR_ADMIN } from "../constanst/actionsTypes";
import axios from "axios";

const SERVER = process.env.REACT_APP_SERVER || "http://localhost:3001/";

export const getCategoriesForAdmin = (page) => {
  try {
    // page debe ser mayor que 0 y menor que la cuenta de productos/ 10
    return async (dispatch) => {
      await axios.get(`${SERVER}categories?admin=${page}`).then((response) => {
        return dispatch({
          type: GET_CATEGORIES_FOR_ADMIN,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => {
  try {
    return async (dispatch) => {
      await axios.get(`${SERVER}categories`).then((response) => {
        return dispatch({
          type: GET_CATEGORIES,
          payload: response.data,
        });
      });
    };
  } catch (error) {
    console.log(error);
  }
};