import { createAsyncThunk } from "@reduxjs/toolkit"
import { getContacts, postContact, removeContact } from "../../services/contactServices"



export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',  
    async (_, thunkApi) => {
        try{
            const {data} = await getContacts()
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/addContact',  
    async (newContact, thunkApi) => {
        try {
            const data = await postContact(newContact);
            const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
            const updatedContacts = [...storedContacts, data];
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',  
    async (contactId, thunkApi) => {
        try {
            await removeContact(contactId);
            const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
            const updatedContacts = storedContacts.filter(contact => contact.id !== contactId);
            localStorage.setItem('contacts', JSON.stringify(updatedContacts));
            return contactId;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)
