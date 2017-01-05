import React from "react";

const Feed = (props) => {
  const {tweets} = props;
  
  return (
    <ul>
      {tweets.map((tweet, index) => <li key={index}>{tweet}</li>)}
    </ul>
  );
};

export default Feed;


/*
 - takes in list of tweets
 - tweets.map = return a new array from the elements of tweets, transform into <li>
 - key:
  Keys help React identify which items have changed, are added, or are removed.
  Keys should be given to the elements inside the array to give the elements a
  stable identity. The best way to pick a key is to use a string that uniquely
  identifies a list item among its siblings.
  * index is not the best, and should be avoided if the items can be re-ordered

 https://facebook.github.io/react/docs/lists-and-keys.html
*/
