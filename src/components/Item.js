import React from "react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from "react";
import Home from "./Home";
const Item = () =>{
    const { id } = useParams();
    const post = useSelector((state) =>
      state.posts.find((post) => post.id === parseInt(id))
    );

    
    let [detailss, setdetails] = useState("");
    let [userdata, setuserdata] = useState("");
    const showdetails = () =>{
         setuserdata("");
         setdetails(post.body)
    }
    const showinfo = () =>{
         setdetails("");
         setuserdata(`Post Was Posted By ${post.userId}`);
    }
    return (
        <div>
       {post ? (
        <div>
          <div className='selected-items'>
          <h1>Post Number :{post.id}</h1>
          <div className="shows">
          <div>
          <img src={`https://picsum.photos/200?random=$%7B${post.id}%7D`}></img>
          <h3>Title: {post.title}</h3>
          </div>
          <div className="buttons">
          <button onClick={showdetails}>Detail</button>
          <button onClick={showinfo}>User Info</button>
          <h3>{detailss}</h3>
          <h3>{userdata}</h3>
          </div> </div> </div>
          <div>
          <h1>More posts</h1>
            <Home/>
          </div>
        </div>
      ) : (
        <p></p>
      )}
        </div>
    )
}
export default Item;