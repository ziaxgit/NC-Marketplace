import axios from "axios";

export default function fetchCategories() {
  return axios
    .get("https://nc-marketplace-sem-2.onrender.com/api/categories")
    .then(({ data }) => {
      return data.categories;
    });
}
