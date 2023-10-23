import { configureStore } from "@reduxjs/toolkit"; //importing configure store from @reduxjs/toolkit
import hackerNewsReducer from "./reducers/hackerNewsReducer"; //importing my reducer function from hackerNewsReducer.js
import mediumReducer from "./reducers/mediumReducer";

//invoking configureStore with export default and passing in the reducer
export default configureStore ({
    reducer: {
        hackerNews: hackerNewsReducer,
        medium: mediumReducer
    }
})