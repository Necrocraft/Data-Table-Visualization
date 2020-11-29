import React from "react";

import "./App.css";

import Table from "./Table";
import MyResponsiveChord from "./Chord";
import Footer from "./Footer";


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
        <Footer />
      </div>
    </div>
  );
}

export default App;
