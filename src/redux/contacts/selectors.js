import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/slice";

export const selectContacts = (state) => state.contacts.items
export const selectLoading = (state) => state.contacts.loading
export const selectError = (state) => state.contacts.error

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filters) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filters.toLowerCase()) ||
      contact.number.includes(filters)
    );
  }
);
