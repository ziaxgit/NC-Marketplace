import axios from "axios";

export default function postItem(item) {
  console.log(item, "ITEM DATA IN POST FILE");
  return axios
    .post("https://nc-marketplace-sem-2.onrender.com/api/items", item)
    .then(({ data }) => {
      console.log(data, "DATA FROM API");
      return data.categories;
    });
}
