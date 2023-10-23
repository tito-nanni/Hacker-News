import axios from 'axios' //importing axios

// setting up initial state with loading and articles properties the same way we did in hackerNewsReducer.js
const initialState = {
    loading: true,
    articles: []
}

//creating action types called REQUEST_ARTICLES and PENDING
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
const PENDING = 'PENDING'

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING}) //before the get request, we are dispatching an action where the type is PENDING. This is in order to display the loading animation
    let articles = await axios.get('/api/hacker-news').then(res => res.data); //at the start here we are making an axios GET request to /api/hacker-news while using await
    dispatch({ type: REQUEST_ARTICLES, payload: articles }) //After the get request, we are dispatching an action where the type we just created, and the payload property is the result of the axios reque
}

//setting up the reducer function
export default function mediumReducer(state=initialState, action) {
    switch (action.type) { //within this reducer function, we add a switch statement with two cases for our PENDING and REQUEST_ARTICLES action types
        case PENDING:
            return { ...state, loading: true }; //we set loading to true for our PENDING action type
            case REQUEST_ARTICLES:
                return { loading: false, articles: action.payload } //For this action type, we turn the loading animation off by setting it to false. We also update the articles property by setting it to action.payload
                default: //default being set to just return the unchanged state
    return state; //returning state from within the reducer function
}}