import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

const MyContext = React.createContext();

const Parent = () => {
  return (
    <MyContext.Provider value="Hello, world">
      <Child />
    </MyContext.Provider>
  );
};

const Child = () => {
  const value = useContext(MyContext);
  return <p>{value}</p>;
};

const App = () => {
  return <Parent />;
};

ReactDOM.render(<App />, document.getElementById("root"));
