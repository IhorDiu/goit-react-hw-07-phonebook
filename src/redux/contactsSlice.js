import {
  createSlice,
  //  nanoid
} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },

    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // addContacts: {
    //   reducer(state, action) {
    //     state.push(action.payload);
    //   },
    //   prepare({ name, number }) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContacts(state, action) {
    //   return state.filter(contact => contact.id !== action.payload);
    // },
  },
});

export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
