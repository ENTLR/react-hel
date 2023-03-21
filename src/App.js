import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Message } from "./pages/Message";
import { Buttons } from "./pages/Buttons";
import { Router } from "./pages/Router";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Router />}>
            <Route index element={<Message />} />
            <Route path='Buttons' element={<Buttons />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
