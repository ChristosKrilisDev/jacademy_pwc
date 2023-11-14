import React, {useState} from 'react'
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {

  const [showMenu, setShowMenu] = useState(false);

  return (
      <div className="position-sticky" style={{top: 0, zIndex: 1}}>
        <header className="py-3" style={{backgroundColor: "#E88D14"}}>
          <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container">
              <a href="https://pwc.com" className="navbar-brand">Employee Management System</a>
              <button className="navbar-toggler" type="button" onClick={() => setShowMenu(!showMenu)}>
                <span className="navbar-toggler-icon"></span>
              </button>
              <div style={showMenu ? {display: "block"} : {display: "none"}} className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="active">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/employees" className="nav-link" activeClassName="active">
                      Employees
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link" activeClassName="active">
                      About Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
  );
}

export default HeaderComponent;
