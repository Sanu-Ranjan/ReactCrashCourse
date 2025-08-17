import { useState } from "react";

import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <>
      <div className="container">
        <form onSubmit={submitHandler}>
          <label htmlFor="email">
            Enter Email ID:{" "}
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Enter Password:{" "}
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
