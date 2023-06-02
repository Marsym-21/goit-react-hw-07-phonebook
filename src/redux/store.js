import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import contactsReducer from './contacts/contactsReducer';
// import { contactSlice } from './contactSlice';

// import { persistContactSlice } from './contactSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,

    valueFilter: filterSlice.reducer,
  },

  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
});

// export const persistor = persistStore(store);
