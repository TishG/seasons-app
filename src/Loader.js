import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui huge text loader">{props.message}</div>
    </div>
  );
};
//if props.message is undefined, this will be the default message
Loader.defaultProps = {
  message: "Loading..."
};

export default Loader;
