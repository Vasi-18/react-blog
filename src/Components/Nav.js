import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="row align-items-center justify-content-center text-center my-5 sticky-top ">
      <div className="col-2  mt-3  ">
        <NavLink className="nav_tab" to="/">All</NavLink>  
      </div>
      <div className="col-2  mt-3">
        <NavLink className="nav_tab" to="/FSD">Full Stack</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink className="nav_tab" to="/DataScience">Data Science</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink  className="nav_tab" to="/Cyber">Cyber Security</NavLink>
      </div>
      <div className="col-2  mt-3">
        <NavLink className="nav_tab" to="/Carrer">Carrer</NavLink>
      </div>
      <hr className="mt-4"/>
    </div>
  );
};

export default Nav;
