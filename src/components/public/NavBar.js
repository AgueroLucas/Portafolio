import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link to="/" className="nav-link px-2 text-white">
                Perfil
              </Link>
            </li>
            <li>
              <Link to="/cv" className="nav-link px-2 text-white">
                C.V.
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;