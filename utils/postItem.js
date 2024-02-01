import axios from "axios";

export default function postItem(item) {
  return axios
    .post("https://nc-marketplace-sem-2.onrender.com/api/items", item)
    .then(({ data }) => {
      return data.categories;
    });
}
