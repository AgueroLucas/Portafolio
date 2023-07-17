import React from 'react'

const Navbar = () => {
    return (
    <header class="p-3 bg-dark text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 text-white">Perfil</a></li>
            <li><a href="/cv" class="nav-link px-2 text-white">C.V.</a></li>
        </ul>
        
        </div>
    </div>
    </header>
    )
}

export default Navbar
