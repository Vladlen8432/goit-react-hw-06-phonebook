import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactReducer from './ContactSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filter'],
};

const persistedReducer = persistReducer(persistConfig, contactReducer);

export const Store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(Store);
