import { createAsyncThunk } from "@reduxjs/toolkit"
import { getContacts, postContact, removeContact } from "../../services/contactServices"



export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
        const data = await getContacts();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const addContact = createAsyncThunk(
    'contacts/addContact',  
    async (newContact, thunkAPI) => {
        try{
            const data = await postContact(newContact)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',  
    async (contactId, thunkAPI) => {
        try{
            const data = await removeContact(contactId)
            return data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
