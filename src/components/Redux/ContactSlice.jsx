import { createSlice } from '@reduxjs/toolkit';

const ContactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    blacklist: ['filter'],
    filter: '',
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, updateFilter } = ContactSlice.actions;
export default ContactSlice.reducer;
