import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TitleDivider } from "../../components/TitleDivider";
import * as authService from "../../services/auth";

export function Login({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const history = useHistory();

  // if logged in, cannot navigate to log in page
  useEffect(() => {
    if (user) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <div style={{ width: "1000px" }}>
      <TitleDivider text="Log In" />
      {loading ? (
        "Loading..."
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setError("");
            authService.login({ email, password }).then(([res, err]) => {
              if (err) {
                setError(err.message);
              } else {
                localStorage.setItem("token", res.data.data);
                setUser(res.data.data);
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
          <input
            className="d-block btn btn-secondary"
            type="submit"
            value="Log in"
          />
        </form>
      )}

      {error}
    </div>
  );
}
