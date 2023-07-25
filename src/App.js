import React from "react";
import Body from "./Components/Body";
import "./App.css";
import Header from "./Components/Header";
import ContextProvider from "./ContextProvider/ContextProvider";
const App = () => {
  return (
    <ContextProvider>
      <header>
        <Header />
      </header>

      <Body />
    </ContextProvider>
  );
};

export default App;
