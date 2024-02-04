import Header from "../Components/Header";
import ItemsList from "../Components/ItemsList";
import Categories from "../Components/Categories";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SellItem from "../Components/SellItem";

import LogInPage from "../Components/LogInPage";
import CheckoutForm from "../Components/CheckoutForm";

export default function App() {
  const [category, setCategory] = useState("");
  const [singlePurchase, setSinglePurchase] = useState(null);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Categories setCategory={setCategory} />
              <ItemsList
                category={category}
                setSinglePurchase={setSinglePurchase}
              />
            </>
          }
        />
        <Route path="/sell" element={<SellItem />} />

        <Route path="/login" element={<LogInPage />} />

        <Route
          path="/quick-checkout"
          element={
            <CheckoutForm
              singlePurchase={singlePurchase}
              setSinglePurchase={setSinglePurchase}
            />
          }
        />
      </Routes>
    </>
  );
}
