import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";

const HookCounter = ({ value }) => {
  useEffect(() => {
    console.log("useEffect()");
    return () => console.log("clear");
  }, [value]);

  return <p>{value}</p>;
};

class ClassCounter extends Component {
  componentDidMount() {
    console.log("class: componentDidMount");
  }

  componentDidUpdate() {
    console.log("class: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("class: componentWillUnmount");
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

const App = () => {
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(true);

  const onMinus = () => {
    setValue((value) => value - 1);
  };

  const onPlus = () => {
    setValue((value) => value + 1);
  };

  const onToggleVisible = () => {
    setVisible((visible) => !visible);
  };

  if (visible) {
    return (
      <div>
        <div>
          <button onClick={onMinus}>-</button>
          <button onClick={onPlus}>+</button>
          <button onClick={onToggleVisible}>Hide</button>
        </div>
        <HookCounter value={value} />
        <ClassCounter value={value} />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <button onClick={onToggleVisible}>Show</button>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById("root"));
