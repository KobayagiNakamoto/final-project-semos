import { useState } from "react";
import { TitleDivider } from "../../components/TitleDivider";
import * as authService from "../../services/auth";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  return (
    <div style={{ width: "1000px" }}>
      <TitleDivider text="Log In" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          authService.login({ email, password }).then(([res, err]) => {
            if (err) {
              setError(err.message);
            } else {
              console.log("success");
            }
            setLoading(false);
          });
        }}
      >
        <label className="d-block" htmlFor="email">
          EMAIL
        </label>
        <input
          className="d-block"
          id="email"
          type="email"
          value={email}
          onChange={handleEmail}
          required
          placeholder="user@domain.com"
        />
        <label className="d-block" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="d-block"
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
          required
          placeholder="******"
        />
        <input className="d-block" type="submit" value="Log in" />
      </form>
    </div>
  );
}
