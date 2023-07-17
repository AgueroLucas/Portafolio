import React, { Component } from 'react';
import Cards from './Cards';
import imagenPersona from '../../sound/foto png.png';

export default class Main extends Component {
  render() {
    return (
      <main>
        <section class="py-5 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
            <img src={imagenPersona} alt="Imagen de la persona" style={{width: '350px' }}/>
              <h1 class="fw-light">
                Lucas Ezequiel Agüero
              </h1>
              <p class="lead text-muted">Programador Front End</p>
              <p>
                <a href="/cv" class="btn btn-dark my-2" style={{ fontSize: '25px', borderRadius: '10px'}}>
                  C.V.
                </a>
              </p>
            </div>
          </div>
        </section>
        <div class="col-lg-10 col-md-8 mx-auto" >
          <h2 class="p-3 mb-2 bg-dark text-white" style={{ borderRadius: '10px' }}>
            Proyectos
          </h2>
        </div>

        <Cards />
      </main>
    );
  }
}