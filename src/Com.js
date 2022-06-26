import React from "react";
const Com = ({ date }) => {
  console.log("In Com component");
  return (
    <div>
      <p>{date.changeStart?.toISOString()}</p>
      <p>{date.changeEnd?.toISOString()}</p>
    </div>
  );
};

export default Com;
