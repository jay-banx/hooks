import React, { useState } from "react";
import ReactDOM from "react-dom";

const HookSwitcher = () => {
  const [color, setColor] = useState("grey");
  const [fontSize, setFontSize] = useState(16);

  return (
    <div
      style={{
        backgroundColor: color,
        padding: "10px",
      }}
    >
      <button
        style={{ fontSize: `${fontSize}px` }}
        onClick={() => setColor("grey")}
      >
        Grey
      </button>
      <button
        style={{ fontSize: `${fontSize}px` }}
        onClick={() => setColor("black")}
      >
        Black
      </button>
      <button
        style={{ fontSize: `${fontSize}px` }}
        onClick={() => setFontSize((fontSize) => fontSize + 2)}
      >
        Font Size +
      </button>
    </div>
  );
};

const App = () => {
  return <HookSwitcher />;
};

ReactDOM.render(<App />, document.getElementById("root"));
