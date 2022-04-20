import React from "react";
import {NavbarBrand} from "common/components";


const index = ({children}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{borderBottom:"2px solid var(--gray2)"}} data-testid={`navbar`}>
      <div className="container-fluid">
        <NavbarBrand></NavbarBrand>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-testid={`navbar-button`}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" data-testid={`navbar-list`}></ul>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default index;
