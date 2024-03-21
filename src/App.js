import React  from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import PagePersona from "./page/persona/page/PagePersona";
import CreatePersona from "./page/persona/create/CreatePersona";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PagePersona/>} />
          <Route path="/persona/create" element={<CreatePersona />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
