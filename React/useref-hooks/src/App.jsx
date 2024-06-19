import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const a = useRef(0);
  const [todos, setTodos] = useState([
    {
      title: "hey",
      desc: "I m good to go",
    },
    {
      title: "hey",
      desc: "I m good to go with to u",
    },
    {
      title: "hello",
      desc: "I m good to go without u",
    },
  ]);

  useEffect(() => {
    a.current = a.current + 1;
    console.log(`Rendering..${a.current}`);
  });

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border border-1 rounded border-zinc-900">
          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {todos.map((todo) => {
        return <Todo todo={todo} />;
      })}
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
