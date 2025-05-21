import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [parameter, setParameter] = useState("");

  const handleChange = function (e) {
    setParameter(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();

    setCount((prev) => prev + 1);
    if (parameter === "") {
      alert("Insert Something!");
      return;
    }

    if (parameter.toLowerCase() === "work better") {
      window.open(
        "https://www.youtube.com/watch?v=Ct6BUPvE2sM&list=RDQM0J7n_uvu778&start_radio=1&ab_channel=UltraRecords"
      );
      return;
    }
    window.open(
      `https://www.detroitaxle.com/part/part/rack-and-pinion/power-steering-rack-and-pinion/${parameter}/`
    );
  };
  return (
    <>
      <h1>Search parts</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button type="submit">Search!</button>
      </form>
      <h2>Times you searched for parts are only {count} ! Do better!</h2>
      <h3>There is an easter egg hidden Somewhere </h3>
    </>
  );
}

export default App;
