import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import fetchUsers from "../utils/fetchUsers";

export default function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState({});
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetchUsers(username)
      .then((data) => {
        setUsers({ ...data });
        setSuccess(true);
      })
      .catch((err) => {
        setError(true);
      });
  }
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  if (error) {
    // navigate("/error");
    return <h1>ERROR</h1>;
  }
  if (success) {
    navigate("/");
  }
  return (
    <section className="sign-in-page-form">
      <Form>
        <h1>Sign In</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={handleUsername}
            type="text"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={handlePassword}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button onClick={handleSubmit} type="submit" variant="primary">
          Log In
        </Button>
      </Form>
    </section>
  );
}
