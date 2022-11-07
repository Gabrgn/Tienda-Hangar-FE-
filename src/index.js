import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Producto } from "./Producto";
import { Turismo } from "./Turismo";
import { Productos } from "./Productos";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/turismo" element={<Turismo />} />
      <Route path="/producto" element={<Producto />} />
      <Route path="/productos" element={<Productos />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
