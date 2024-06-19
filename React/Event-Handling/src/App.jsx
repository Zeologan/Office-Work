import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("second");

  const handleClick = () => {
    alert("Hey its rohit");
  };

  const handleMouseover = () => {
    alert("I am mouse over");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>

      {/* <div className='red' onMouseOver={handleMouseover}>
          i am red
      </div> */}

      <input type="text" value={name} onChange={handleChange} />
    </>
  );
}

export default App;
