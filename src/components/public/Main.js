import React, { Component } from 'react';
import Cards from './Cards';
import ScrollToTop from 'react-scroll-to-top';

export default class Main extends Component {
  render() {
    return (
      <main>
        <ScrollToTop smooth color="#000" />
        <section className="py-3 text-center container">
          <div className="row py-lg-1">
            <div className="col-lg-6 col-md-8 mx-auto">
              <img
                src="https://i.pinimg.com/736x/ee/bd/e8/eebde89ad5776e383e0019356c2e1e02.jpg"
                alt="Imagen 1"
                className="bd-placeholder-img rounded-circle"
                width="340"
                height="340"
                aria-label="Placeholder: 140x140"
                style={{ border: '2px solid black' }}
              />
              <h1 style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>Lucas Ezequiel Agüero</h1>
              <p className="lead text-muted" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                Desarrollador Front End
              </p>
              <p className="lead text-muted" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                Autodidacta dispuesto a aprender lo necesario para mejorar laboralmente
              </p>
              <p className="lead text-muted"></p>
            </div>
          </div>
        </section>
        <div style={{ marginBottom: '30px' }} className="col-lg-10 col-md-8 mx-auto">
          <h2
            className="p-3 mb-2 bg-dark text-white"
            style={{ borderRadius: '10px', fontFamily: 'Kanit', fontWeight: 'lighter' }}
          >
            Proyectos
          </h2>
        </div>

        <Cards />
      </main>
    );
  }
}