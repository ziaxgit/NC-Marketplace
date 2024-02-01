import Header from "../Components/Header";
import ItemsList from "../Components/ItemsList";
import Categories from "../Components/Categories";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SellItem from "../Components/SellItem";

export default function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories setCategory={setCategory} />
              <ItemsList category={category} />
            </>
          }
        />
        <Route path="/sell" element={<SellItem />} />
      </Routes>
    </>
  );
}
