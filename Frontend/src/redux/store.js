// import {configureStore} from 'react-redux'
// import userSlice from './userSlice'

// const store = configureStore({
//     //actions
//     user : userSlice
// });

// export default store;



import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import tweetSlice from './tweetSlice'

const store = configureStore({
    reducer: {  // The key should be "reducer" and it should hold an object of reducers
        user: userSlice,  // Here, "user" is a field in your state that refers to the userSlice reducer
        tweet : tweetSlice
    }
});

export default store;
