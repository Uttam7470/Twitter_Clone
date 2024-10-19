// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import  userSlice from "./userSlice";
// import tweetSlice from "./tweetSlice";


// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }
// const rootReducer = combineReducers({
//     user : userSlice,
//    tweet :  tweetSlice
// })
//   const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export default store;


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import tweetSlice from "./tweetSlice";
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
import storage from "redux-persist/lib/storage"; // default storage (localStorage)

// Persist configuration
const persistConfig = {
  key: "root",
  version: 1,
  storage, // default storage
};

// Combine all the slices
const rootReducer = combineReducers({
  user: userSlice,
  tweet: tweetSlice,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore persist-related actions for serializability
      },
    }),
});

// Create the persistor (used in PersistGate)
export const persistor = persistStore(store);

export default store;
