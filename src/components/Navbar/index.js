import Logo from "./logo.png";
import { Link } from "react-router-dom";
import { ButtonLink } from "../ButtonLink";
import { Fragment } from "react";

export function Navbar({ user, setUser }) {
  return (
    <div style={{ width: "1000px" }}>
      <div className="d-flex align-items-center justify-content-between my-5">
        <Link to="/">
          <img height="57" src={Logo} alt="logo" />
        </Link>
        <div>
          <span className="text-muted text-uppercase fs-8 fw-bold">
            Breakfast
          </span>
          <span className="divider-dot"></span>
          <span className="text-muted text-uppercase fs-8 fw-bold">Brunch</span>
          <span className="divider-dot"></span>
          <span className="text-muted text-uppercase fs-8 fw-bold">Lunch</span>
          <span className="divider-dot"></span>
          <span className="text-muted text-uppercase fs-8 fw-bold">Dinner</span>
        </div>
        <div className="d-flex align-items-center">
          {user ? (
            <Fragment>
              <Link to="/myrecipes">
                <span className="text-green text-uppercase fs-8 fw-bold">
                  My Recipes
                </span>
              </Link>
              <span className="divider-dot"></span>
              <Link to="/myprofile">
                <span className="text-orange text-uppercase fs-8 fw-bold">
                  My Profile
                </span>
              </Link>
              <span className="divider-dot"></span>
              <span
                className="text-muted text-uppercase fs-8 fw-bold pointer"
                onClick={() => {
                  setUser("");
                  localStorage.removeItem("token");
                }}
              >
                Log Out
              </span>
            </Fragment>
          ) : (
            <Fragment>
              <ButtonLink to="/login" className="btn-outline-secondary">
                Log In
              </ButtonLink>
              <span className="mx-3">or</span>
              <ButtonLink to="/register" className="btn-success">
                Create Account
              </ButtonLink>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
