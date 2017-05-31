const Feed = ({tweets}) => (
  <ul>
    {tweets.map((tweet) => <li>{tweet}</li>)}
  </ul>
);
