import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js'; //importing { requestArticles } from hackerNewsReducer.js
import { useSelector, useDispatch } from 'react-redux'; //importing useSelector and useDispatch from react-redux
import { useEffect } from 'react'; //importing useEffect from react

export default function HackerNews() {
  const articles = useSelector((state) => state.hackerNews.articles); //using useSelector to get articles from the redux store instead of local state
  const loading = useSelector((state) => state.hackerNews.loading);  // using useSelector to get loading from the redux store instead of local state
  const dispatch = useDispatch(); //invoking useDispatch to get the dispatch function
  //const [articles, setArticles] = useState([]); WE REMOVE THE LOADING AND ARTICLES FROM LOCAL STATE SINCE WE ARE NO LONGER USING THEM!
  //const [loading, setLoading] = useState(true);

  //adding a useEffect hook
  useEffect(() => {
    dispatch(requestArticles); //we end up dispatching requestArticles inside it
  }, []) //adding an empty array as the second argument to the useEffect

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
