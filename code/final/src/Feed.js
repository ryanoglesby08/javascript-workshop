import React from "react";

const feedStyles = {
  listStyleType: "none",
  margin: "1rem 0",
  padding: 0,
  borderTop: "1px solid #ccc"
};

const tweetStyles = {
  padding: "1rem",
  borderBottom: "1px solid #ccc"
}

const Feed = ({tweets}) => (
  <ul style={feedStyles}>
    {tweets.map((tweet, index) => <li key={index} style={tweetStyles}>{tweet}</li>)}
  </ul>
);

export default Feed;
