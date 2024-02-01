import { useEffect, useState } from "react";
import fetchCategories from "../utils/fetchCategories";
import { useNavigate } from "react-router-dom";

fetchCategories;
export default function Categories({ setCategory }) {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCategories().then((data) => {
      setCategories([...data]);
    });
  }, []);

  function handleClick(e) {
    setCategory(e.target.innerText);
  }

  function allItemsClick() {
    setCategory("");
  }

  function sellItemClick() {
    navigate("/sell");
  }

  return (
    <div className="category-buttons">
      <button onClick={allItemsClick} className="category-btn">
        All Items
      </button>
      {categories.map((category) => {
        return (
          <button key={category.category_name} onClick={handleClick} className="category-btn">
            {category.category_name}
          </button>
        );
      })}
      <button onClick={sellItemClick} className="sell-btn">
        Sell Your Item
      </button>
    </div>
  );
}
