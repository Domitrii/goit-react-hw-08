import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { addContact, deleteContact, fetchContacts } from "./operations";
import { logout } from "../auth/operations";


const INITIAL_STATE = {
   items: [],
   loading: false,
   error: null,
  }

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.loading = false
          if(Array.isArray(state.items)) {
            state.items.push(action.payload);
          } else {
            state.items = [action.payload];
          }
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items = state.items.filter(({ id }) => id !== action.payload);
        }) 
        .addCase(logout.fulfilled, (state) => {
          state.error = null;
          state.loading = false;
          state.items = [];
        })
        .addMatcher(isAnyOf(addContact.pending, fetchContacts.pending , deleteContact.pending), (state) => {
          state.loading = true;
          state.error = null;
        })
        .addMatcher(isAnyOf(addContact.rejected, fetchContacts.rejected , deleteContact.rejected), (state) => {
            state.loading = false;
            state.error = true;
        })
    },
  });

  export const contactsReducer = contactsSlice.reducer;