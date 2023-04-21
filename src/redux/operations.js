import axios from "axios";
import {
    fetchingInProgress,
    fetchingSuccess,
    fetchingError,
  } from "./contactsSlice";

axios.defaults.baseURL = "https://643e9914c72fda4a0bfb6ad1.mockapi.io";

export const fetchContacts = () => async dispatch => {
    try {
      // Індикатор завантаження
      dispatch(fetchingInProgress());
      // HTTP-запит
      const response = await axios.get("/contacts");
      // Обробка даних
      dispatch(fetchingSuccess(response.data));
    } catch (e) {
      // Обробка помилки
      dispatch(fetchingError(e.message));
    }
  };

  