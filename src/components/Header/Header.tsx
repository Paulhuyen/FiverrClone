import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title?: string;
};

export default function Header(props: Props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark">
      <NavLink className="navbar-brand d-flex" to="/home">
        <h4>fiverr</h4>
        <span>
          <i className="fa fa-circle" aria-hidden="true"></i>
        </span>
      </NavLink>

      {/* <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            /> */}

      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="" aria-current="page">
              Become a Seller <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/signup'>
              <button
              className="btn btn-outline-light my-2 my-sm-0"
              type="submit"
              >
                Join
            </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
    
    </>
  );
}
