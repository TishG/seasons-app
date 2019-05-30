import React from "react";
import ReactDOM from "react-dom";
import useLocation from "./useLocation";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

const App = () => {
  const [lat, errorMessage] = useLocation();
  let content;
  if (lat && !errorMessage) {
    content = <SeasonDisplay lat={lat} />;
  } else if (errorMessage && !lat) {
    content = <div>Error: {errorMessage}</div>;
  } else {
    content = <Loader message="Please allow the location request" />;
  }
  return <div>{content}</div>;
};

ReactDOM.render(<App />, document.getElementById("root"));
