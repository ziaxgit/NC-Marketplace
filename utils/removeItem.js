import axios from "axios";

export default function removeItem(itemId) {
  return axios.delete(
    `https://nc-marketplace-sem-2.onrender.com/api/items/${itemId}`
  );
}
