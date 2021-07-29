import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TitleDivider } from "../../components/TitleDivider";
import * as authService from "../../services/auth";

export function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleBirthday = (e) => setBirthday(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRepeatPassword = (e) => setRepeatPassword(e.target.value);
  const history = useHistory();

  return (
    <div style={{ width: "1000px" }}>
      <TitleDivider text="Create Account" />
      {loading ? (
        "Loading..."
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            setError("");
            authService
              .register({
                first_name: firstName,
                last_name: lastName,
                email,
                password,
                repeat_password: repeatPassword,
                birthday,
              })
              .then(([res, err]) => {
                if (err) {
                  setError(err.message);
                } else {
                  history.push("/login");
                }
                setLoading(false);
              });
          }}
        >
          <div className="d-flex">
            <div className="p-3">
              <label className="d-block" htmlFor="firstName">
                First Name
              </label>
              <input
                className="d-block"
                id="firstName"
                type="text"
                value={firstName}
                onChange={handleFirstName}
                required
                placeholder="John"
              />
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
            </div>
            <div className="p-3">
              <label className="d-block" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="d-block"
                id="lastName"
                type="text"
                value={lastName}
                onChange={handleLastName}
                required
                placeholder="Smith"
              />
              <label className="d-block" htmlFor="birthday">
                Birthday
              </label>
              <input
                className="d-block"
                id="birthday"
                type="text"
                value={birthday}
                onChange={handleBirthday}
                required
                placeholder="22-12-1999"
              />
              <label className="d-block" htmlFor="repeatPassword">
                Repeat Password
              </label>
              <input
                className="d-block"
                id="repeatPassword"
                type="text"
                value={repeatPassword}
                onChange={handleRepeatPassword}
                required
                placeholder="******"
              />
            </div>
          </div>
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
