import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  let cities = ["alwar", "Jaipur", "Delhi", "Agra", "Jaisalmer"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    console.log("Button pressed");
  };
  return (
    <div className="App">
      <h2>
        <Button onClick={handleClick} color="primary">
          Hello
        </Button>
      </h2>
    </div>
  );
}

export default App;
