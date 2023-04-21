import {
  createSlice,
  //  nanoid
} from '@reduxjs/toolkit';
import { fetchContacts, addContacts } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
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
});

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
