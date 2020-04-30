import React from "react";
import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  let increment = (i) => setCount(count + i);
  return (
    <div>
      <Button onClickFunc={increment} value={1} />
      <Button onClickFunc={increment} value={5} />
      <Button onClickFunc={increment} value={10} />
      <Button onClickFunc={increment} value={100} />
      <Display countDisp={count} />
    </div>
  );
}

export default App;
