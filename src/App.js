import './App.css';
import React from "react";
import Header from "./Header";

function App() {
  return (
      //BEM naming convention
    <div className="app">
      <h1>Hello World</h1>
        <Header/>
        {/*Sidebar*/}
        {/*React-Router -> Chat screen */}
    </div>
  );
}

export default App;
