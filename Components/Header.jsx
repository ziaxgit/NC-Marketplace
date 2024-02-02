import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <h1 onClick={handleClick} className="header">
      <span className="NC">NC &nbsp;</span> Marketplace
    </h1>
  );
}
