import React from "react";

const positiveStyles = {
  color: "green"
};
const negativeStyles = {
  color: "red"
};

const TweetLength = ({remaining}) => {
  const styles = remaining >= 0 ? positiveStyles: negativeStyles;

  return <span style={styles}>{remaining}</span>;
};

export default TweetLength;
