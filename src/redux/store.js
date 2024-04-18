import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filters/slice";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/slice";
import { contactsReducer } from "./contacts/slice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";

  
const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
    reducer:{
        contacts: contactsReducer ,
        filters: filterReducer,
        auth: persistReducer(authConfig, authReducer)
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
    })
})

export const persistor = persistStore(store)

export default store