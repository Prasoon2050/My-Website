import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Resume from "./Resume";
import Photography from "./Photography";
import Contact from "./Contact";
import Body from "./Body";

function Header() {

    return (
      <Router>
      <div>
      <section id=" navigation">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Prasoon Kumar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item nav-link">
                  <Link to="/">About Me</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link to="/resume">Resume</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link to="/photography">Photography</Link>
                </li>
                <li class="nav-item nav-link">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </section>
        </div>
        <Routes>
          <Route exact path="/resume" element={<Resume />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/contact" element={<Contact />} />
          <Route exact path="/" element={<Body />} />
        </Routes>


      </Router>
    );
}

export default Header;
