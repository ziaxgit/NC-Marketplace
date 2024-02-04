import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  function goBackToHomepage() {
    navigate("/");
  }
  function logInButton() {
    navigate("/login");
  }
  return (
    <div>
      <h1 onClick={goBackToHomepage} className="header">
        <span className="NC">NC &nbsp;</span> Marketplace
      </h1>
      <button onClick={logInButton}>Sign In</button>
      <button>Profile</button>
      <button>Users</button>
    </div>
  );
}
