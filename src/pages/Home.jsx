import React, { useState, useEffect } from "react";
import ExpenseForm from "../components/ExpenseForm";
import MonthlyBtns from "../components/MonthlyBtns";
import MonthlyList from "../components/MonthlyList";

function Home({ lists, setLists }) {
  const [selectedMonth, setSelectedMonth] = useState(
    JSON.parse(localStorage.getItem("selectedMonth") ?? 2)
  );
  const [activeDate, setActiveDate] = useState("");

  useEffect(() => {
    localStorage.setItem("selectedMonth", JSON.stringify(selectedMonth));

    const currentYear = new Date().getFullYear();
    const newActiveDate = `${currentYear}-${String(selectedMonth).padStart(
      2,
      "0"
    )}-01`;
    setActiveDate(newActiveDate); // 선택된 월에 따라 인풋의 벨류가 바뀜
  }, [selectedMonth]);

  const filteredLists = lists.filter(
    (list) => parseInt(list.date.split("-")[1]) == selectedMonth
  );

  return (
    <>
      <ExpenseForm
        setLists={setLists}
        setSelectedMonth={setSelectedMonth}
        activeDate={activeDate}
      />
      <MonthlyBtns
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <MonthlyList filteredLists={filteredLists} />
    </>
  );
}

export default Home;
