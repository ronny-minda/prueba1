import { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Post from "./pages/Posts";

import Destacados from "./pages/Destacados";

function App() {
  const [count, setCount] = useState(0);

  const nuevoArrayFaborito = [];
  localStorage.setItem("abjArray", JSON.stringify(nuevoArrayFaborito));

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={<Post />} />
        <Route path="/destacados" element={<Destacados />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
