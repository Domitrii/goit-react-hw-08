import { instance } from "./authServices"

export const getContacts = async () => {
    const { data } = await instance.get("/contacts");
    return data;
  };

export const postContact = async (formData) => {
    const {data} = await instance.post('/contacts', formData)
    return data
}

export const removeContact = async (contactId) => {
    const {data} = await instance.delete(`/contacts/${contactId}`)
    return data.id
}

