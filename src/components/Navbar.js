import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        props.mode === "dark" || props.mode === "light" ? props.mode : 'light'
      } bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/">
                Disabled
              </a>
            </li> */}
          </ul>
          <div className="d-flex">
            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toogleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer", border: '1px solid black' }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toogleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer", border: '1px solid black' }}
            ></div>
            <div
              className="bg-success rounded mx-2"
              onClick={() => {
                props.toogleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer", border: '1px solid black' }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toogleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer", border: '1px solid black' }}
            ></div>
          </div>
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } me-3`}
          >
            <input
              className="form-check-input"
              onClick={(e) => {
                props.toogleMode(null,e);
              }}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Darkmode
            </label>
          </div>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{
                color: props.mode === "dark" ? "white" : "black",
                backgroundColor: props.mode === "dark" ? "#322828" : "white",
              }}
            />
            <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'secondary'}`} type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string
// }

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

/* use as a default prop when value not passed in props */
// Navbar.defaultProps = {
//    title: "Set Title Here",
//    aboutText: "About Text Here"
// }
