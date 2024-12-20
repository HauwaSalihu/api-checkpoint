import { useState } from "react";
import UserList from "./components/UserList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container mx-auto">
      <h2 className="m-5 font-bold text-3xl">USER LIST</h2>
      <UserList />
    </div>
  );
}

export default App;
