import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Home from "./app/pages/home/Home";
import "./index.css";
import GameServerList from "./app/pages/home/gameServerList/GameServerList";
import GameServerCreateForm from "./app/pages/home/GameServerCreateForm/GameServerCreateForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<GameServerList />} />
        <Route path='create' element={<GameServerCreateForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
