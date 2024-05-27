import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ExpenseLists from "../fakeData.json";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

export const Router = () => {
  const [lists, setLists] = useState(ExpenseLists);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home lists={lists} setLists={setLists} />} />
        <Route
          path="/detail/:id"
          element={<Detail lists={lists} setLists={setLists} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
