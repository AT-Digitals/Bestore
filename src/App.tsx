import "./App.css";

import { Box } from "@mui/material";
import React from "react";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Box>
          <h1>Hello Vite + React!</h1>
        </Box>
      </header>
    </div>
  );
}

export default App;
