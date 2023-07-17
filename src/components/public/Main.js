import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cards from './Cards';
import imagenPersona from '../../sound/foto png.png';

export default class Main extends Component {
  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <img src={imagenPersona} alt="Imagen de la persona" style={{ width: '300px' }} />
              <h1 className="fw-light">Lucas Ezequiel Agüero</h1>
              <p className="lead text-muted">Programador Front End</p>
              <p>
                <Link to="/cv" className="btn btn-dark my-2" style={{ fontSize: '25px', borderRadius: '10px' }}>
                  C.V.
                </Link>
              </p>
            </div>
          </div>
        </section>
        <div className="col-lg-10 col-md-8 mx-auto">
          <h2 className="p-3 mb-2 bg-dark text-white" style={{ borderRadius: '10px' }}>
            Proyectos
          </h2>
        </div>

        <Cards />
      </main>
    );
  }
}