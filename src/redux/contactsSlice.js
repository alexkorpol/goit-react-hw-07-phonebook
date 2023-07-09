import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from 'services/services-API';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handleSetErrorMessage = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = handleSetErrorMessage;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = handleSetErrorMessage;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
        state.error = null;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = handleSetErrorMessage;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.error = null;
      });
  },
});

const { reducer: contactsReducer } = contactsSlice;
export default contactsReducer;
