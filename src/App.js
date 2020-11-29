import React from "react";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

import "./App.css";

import Table from "./Table";
import MyResponsiveChord from "./Chord";


function App() {
  return (
    <div>
      <div className="app__header">
        <h1>Data Table Visualization</h1>
      </div>
      <div className="app">
        <div className="app_table">
          <Table />
        </div>
        <div className="chord">
            <MyResponsiveChord />
        </div>
      </div>
      <div className="footer">
          <h2>&copy; Necrocraft</h2>
          <a href="https://github.com/necrocraft" target="_blank" rel="noopener noreferrer"><AiFillGithub style={{color: "black", fontSize: "1.5em"}}/></a>
          <a href="mailto:mhdzeefan@gmail.com" ><AiFillMail style={{color: "black", fontSize: "1.5em"}}/></a>
      </div>
    </div>
  );
}

export default App;
