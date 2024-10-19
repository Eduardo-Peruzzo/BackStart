
import React from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Route, Routes } from "react-router-dom";

import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Home from "./pages/Home";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";
import Login from "./pages/Login";
import SobreNos from "./pages/SobreNos";


const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projeto/" element={<ProjetoDetalhes/>} />
        <Route path="/projeto/:id" element={<ProjetoDetalhes/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/sobre-nos" element={<SobreNos/>} />

      </Routes>
    </HashRouter>
  </React.StrictMode>
);
