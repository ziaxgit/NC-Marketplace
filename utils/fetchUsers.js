import axios from "axios";

export default function fetchUsers(username) {
  console.log(username);
  let url = "https://nc-marketplace-sem-2.onrender.com/api/users";
  if (username !== undefined) {
    url += `/${username}`;
  }

  return axios.get(url).then(({ data }) => {
    return data;
  });
}
