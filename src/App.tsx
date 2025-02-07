import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);
  const [alertVisibility, setAlertVisibility] = useState(false);
  let cities = ["alwar", "Jaipur", "Delhi", "Agra", "Jaisalmer"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleClick = () => {
    setAlertVisibility(true);
  };
  return (
    <div className="App">
      <h2>
        <Button onClick={handleClick}>Hello</Button>
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>Alert Button</Alert>
        )}
      </h2>
    </div>
  );
}

export default App;
