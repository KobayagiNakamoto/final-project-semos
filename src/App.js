import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Main } from "./pages/Main";
import { MyProfile } from "./pages/MyProfile";
import { MyRecipes } from "./pages/MyRecipes";
import { Register } from "./pages/Register";

export function App() {
  const [modalShow, setModalShow] = useState(false);
  const blur = modalShow ? "blur" : "";
  return (
    <Router>
      <div
        id="main"
        className={`${blur} d-flex flex-column align-items-center justify-content-between`}
      >
        <div>
          <Navbar />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/myprofile">
              <MyProfile />
            </Route>
            <Route path="/myrecipes">
              <MyRecipes />
            </Route>
            <Route path="/">
              <Main modalShow={modalShow} setModalShow={setModalShow} />
            </Route>
          </Switch>
        </div>
        <div
          style={{ height: "180px", width: "100%", marginTop: "80px" }}
          className="bg-secondary"
        ></div>
      </div>
    </Router>
  );
}
