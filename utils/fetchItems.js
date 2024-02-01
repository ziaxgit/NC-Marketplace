import axios from "axios";

export default function fetchItems() {
  return axios
    .get("https://nc-marketplace-sem-2.onrender.com/api/items")
    .then(({ data }) => {
      return data.items;
    });
}
