import { useState } from "react";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0);
  let cities = ["alwar", "Jaipur", "Delhi", "Agra", "Jaisalmer"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div className="App">
      <h2>
        {/* <ListGroup
          cities={cities}
          heading="Cities"
          onSelectItem={handleSelectItem}
        /> */}
        <Alert>
          Hello <span>How are u</span>
        </Alert>
      </h2>
    </div>
  );
}

export default App;
