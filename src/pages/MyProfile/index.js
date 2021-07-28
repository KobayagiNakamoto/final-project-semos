import { useState } from "react";
import { TitleDivider } from "../../components/TitleDivider";

export function MyProfile() {
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
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRepeatPassword = (e) => setRepeatPassword(e.target.value);
  return (
    <div style={{ width: "1000px" }}>
      <TitleDivider text="My Profile" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hello");
        }}
      >
        <div className="d-flex">
          <div className="d-flex flex-column align-items-center justify-content-center p-3">
            <img
              className="d-block rounded-circle shadow-sm"
              height="123"
              src="https://randomuser.me/api/portraits/lego/7.jpg"
              alt="profile"
            />
            <button className="btn btn-outline-secondary" type="button">
              CHANGE AVATAR
            </button>
          </div>
          <div className="p-3">
            <label className="d-block" for="firstName">
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
            <label className="d-block" for="email">
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
            <label className="d-block" for="password">
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
            <label className="d-block" for="lastName">
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
            <label className="d-block" for="lastName">
              Birthday
            </label>
            <input
              className="d-block"
              id="lastName"
              type="text"
              value={lastName}
              onChange={handleLastName}
              required
              placeholder="22-12-1999"
            />
            <label className="d-block" for="repeatPassword">
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
        <input className="d-block" type="submit" value="Log in" />
      </form>
    </div>
  );
}
