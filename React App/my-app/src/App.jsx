import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function MyButton() {
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Click To increment</button>
      </>
    );
  }

  function MyNumber() {
    return (
      <>
        <p>{count}</p>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <MyButton className="button"></MyButton>
        <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        <br />
        <MyNumber></MyNumber>
      </div>
    </>
  );
}

export default App;
