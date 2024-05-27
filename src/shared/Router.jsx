import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ExpenseLists from "../fakeData.json";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { FamilyContext } from "../context/FamilyContext";

export const Router = () => {
  const [lists, setLists] = useState(ExpenseLists);
  return (
    <FamilyContext.Provider value={{ lists, setLists }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </FamilyContext.Provider>
  );
};

export default Router;
