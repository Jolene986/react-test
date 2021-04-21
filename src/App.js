import React from "react";
import "./App.css";

import DisplayNumber from "./components/DisplayNumber";
import Button from "./components/Button";
import DisplayPairs from "./components/DisplayPairs";
import DisplayProgress from "./components/DisplayProgress";
import Input from "./components/Input";
import Radio from "./components/RadioButtons";

function App() {
  return (
    <div className="App">
      <Radio />
      <Button />
      <DisplayNumber />
      <Input />
      <DisplayProgress />
      <DisplayPairs />
    </div>
  );
}

export default App;
