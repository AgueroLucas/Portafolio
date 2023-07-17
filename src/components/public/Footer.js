import React from "react";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">&copy; 2023 Lucas Agüero</p>

        <ul class="nav col-md-4 justify-content-end">
          <li class="nav-item">
            <a href="/" class="nav-link px-2 text-muted">
              Perfil
            </a>
          </li>
          <li class="nav-item">
            <a href="/cv" class="nav-link px-2 text-muted">
              C.V.
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;