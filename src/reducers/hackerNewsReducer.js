import axios from 'axios' //importing axios

//initial state being set up to be an object with loading and articles as the properties
const initialState = {
    loading: false, //loading is set to false
    articles: [] //articles is set up to be an empty array
}

//creating two action types called PENDING and REQUEST_ARTICLES
const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
const PENDING = 'PENDING'

//creating an async function(thunk) called requestArticles that takes in the dispatch function as a paramater
//After we have wrote the async function, we add export before const to export the requestArticles function
export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING}) //before the get request, we are dispatching an action where the type is PENDING. This is in order to display the loading animation
    let articles = await axios.get('/api/hacker-news').then(res => res.data); //at the start here we are making an axios GET request to /api/hacker-news while using await
    dispatch({ type: REQUEST_ARTICLES, payload: articles }) //After the get request, we are dispatching an action where the type we just created, and the payload property is the result of the axios request
}

//originally set up as creating a simple reducer function that returns state. Using export default
export default function hackerNewsReducer(state=initialState, action) {
    switch (action.type) { //within this reducer function, we add a switch statement with two cases for our PENDING and REQUEST_ARTICLES action types
        case PENDING:
            return { ...state, loading: true }; //we set loading to true for our PENDING action type
            case REQUEST_ARTICLES:
                return { loading: false, articles: action.payload } //For this action type, we turn the loading animation off by setting it to false. We also update the articles property by setting it to action.payload
                default: //default being set to just return the unchanged state
                    return state;
    }
    return state;
}