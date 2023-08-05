import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  
  let [displays, setdisplays] = useState("Social Media For Travellers");
  const showdetails = () =>{
       setdisplays("");
  }
  return (
    <div>
     <div className='head'><h1>{displays}</h1></div>
     <input type='text' placeholder='search here...'></input>
     <div className='productsList'>
     {posts.map((post) => (
        <div key={post.id} className='productsdetail'>
          <img src={`https://picsum.photos/200?random=$%7B${post.id}%7D`} alt='Products'></img>
          <h3>{`${post.title.slice(0, 20)}...`}</h3>
          <p>{`${post.body.slice(0, 100)}...`}</p>
          <Link to={`/item/${post.id}`} onClick={showdetails}>Read More...</Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Home;
