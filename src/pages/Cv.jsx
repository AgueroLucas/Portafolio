import React from 'react';
import Footer from '../components/public/Footer';
import Navbar from '../components/public/NavBar';
import './estilocv.css';
import { FaLinkedin,  FaWhatsapp } from "react-icons/fa";

function Cv() {
  const mainStyle = {
    backgroundColor: 'linear-gradient(#D8D6DB, #F9F8FC)',
    fontFamily: 'Kanit, sans-serif',
  };

  

  return (
    <div style={mainStyle}>
      
      <Navbar />
      <div className="row justify-content-center">
      <div className="col-md-9 ">
  <div className="row align-items-center">
    <div className="col-lg-5">
      <div className="resume-base p-4" style={{ backgroundColor: '#212529', border: '3px solid #212529', borderRadius: '10px', position: 'relative' }}>
        <div className="profile">
          <div className="jobster-user-info d-flex align-items-center">
            <div className="profile-avatar">
              <img className="img-fluid" src="https://i.pinimg.com/736x/ee/bd/e8/eebde89ad5776e383e0019356c2e1e02.jpg" alt="" />
            </div>
            <div className="profile-avatar-info mt-3 " style={{ marginLeft: '20px' }} >
              <h5 className="text-white">Lucas Agüero</h5>
              <div className="d-flex" style={{ gap: '6px' }}>
                <a className="text-body-white" href="https://wa.me/5492634368835" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp style={{ fontSize: '3rem', color: '#25D366' }} />
                </a>

                <a className="text-body-white" href="https://www.linkedin.com/in/lucas-ag%C3%BCero-16447724b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ fontSize: '3rem', color: '#7289DA' }} />
                </a>
              </div>
              {/* Botón para descargar con enlace */}
              <a href="URL_DEL_ARCHIVO" download target="_blank" rel="noopener noreferrer" className="text-dark btn btn-dark" style={{ position: 'absolute', top: '8%', right: '10px', transform: 'translateY(-50%)',backgroundColor: '#7C7C7C',fontWeight: 'bold' ,transition: 'background-color 0.3s ease', // Añadido para suavizar la transición
  }}
  // Pseudo-clases para el hover
  onMouseEnter={(e) => e.target.style.backgroundColor = '#F9F8FC'}
  onMouseLeave={(e) => e.target.style.backgroundColor = '#7C7C7C'}>Descargar</a>
            
                      
  
                    </div>
                  </div>
                  
                </div>
                <div className="about-candidate border-top">
                  <div className="candidate-info">
                    <h6 className="text-white">Email:</h6>
                    <p className="text-white">lucasaguero1997@gmail.com</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Teléfono:</h6>
                    <p className="text-white">+(54) 2634368835</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Domicilio:</h6>
                    <p className="text-white">Mendoza, Ciudad</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Idioma:</h6>
                    <p className="text-white">Español: Nativo</p>
                  </div>
                  <div className="candidate-info">
                    <h6 className="text-white">Sobre mí:</h6>
                    <p className="text-white"><ul>
                      <li>En busca de oportunidades que me ayuden a crecer de forma profesional.</li>
                      <li>Uso de buenas practicas al momento de programar.</li>
                      <li>Desarrollador Trainee.</li>
                      </ul></p>
                  </div>
                
                </div>
                <div className="mt-0" style={{ display: "flex" }}>
  <div style={{ marginRight: "60px" ,marginTop: "-10px"}}>
    <h5 className="text-white">Competencias:</h5>
    <ul>
      <li className="text-white">Buen trabajo en equipo</li>
      <li className="text-white">Disciplinado</li>
      <li className="text-white">Responsable</li>
      <li className="text-white">Rápido aprendizaje</li>
      <li className="text-white">Organizado</li>
      <li className="text-white">Buena comunicación</li>
    </ul>
  </div>

  <div style={{ marginTop: "-10px"}}>
    <h5 className="text-white">Skills:</h5>
    <ul>
      <li className="text-white">React.js</li>
      <li className="text-white">Javascript</li>
      <li className="text-white">Wordpress</li>
      <li className="text-white">Conocimientos Basicos de SCRUM</li>
      <li className="text-white">Git / GitHub</li>
      <li className="text-white">Angular</li>
      
    </ul>
  </div>
</div>
              </div>
            </div>
            <div className="col-lg-7" style={{ padding: '20px'}}>
              <div className="resume-experience p-4" style={{ border: '2px solid #34375a', borderRadius: '10px' }}>
              <div className="timeline-box" >
                  <h5 className="resume-experience-title" style={{ marginLeft: '18px' }}>Educación:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2010 - 2017</span>
                          <h6 className="mb-2">Producción de Bienes y Servicios con Orientación en Industrias de Procesos</h6>
                          <span>-Escuela Nº 4-016 "Ing. Antonio M. Arboit"</span>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="timeline-box mt-5">
                  <h5 className="resume-experience-title" style={{ marginLeft: '18px' }}>Cursos:</h5>
                  <div className="jobster-candidate-timeline">

                  <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2024 - Actualidad</span>
                          <h6 className="mb-2">Fullstack - Javascript/Node.js</h6>
                          <p className="mt-2">Cursando</p>
                        </div>
                      </div>
                    </div>

                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2022 - 2023</span>
                          <h6 className="mb-2">T.TEC San Juan – Cuyo - Programador Full Stack</h6>
                          <p className="mt-2">Curso de Programador Full Stack - Python de una duración de 500 horas certificado por la Universidad Nacional de San Juan (UNSJ).
</p>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2022 - 2022</span>
                          <h6 className="mb-2">Coder House- Desarrollador Web</h6>
                          <p className="mt-2">Curso de Desarrollo web de una duración de 38 horas a lo largo de 10 semanas, cumpliendo todos los requisitos académicos exigidos</p>
                        </div>
                      </div>
                    </div>
                    <div className="jobster-timeline-item mb-0">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2022 - 2022</span>
                          <h6 className="mb-2">EEG Cooperation- Curso de Programación desde Cero</h6>
                          <p className="mt-2">Curso de Programación desde Cero de una duración de 81hs teóricas y prácticas.</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
                <div className="timeline-box mt-4">
                  <h5 className="resume-experience-title" style={{ marginLeft: '18px' }}>Experiencia Laboral:</h5>
                  <div className="jobster-candidate-timeline">
                    <div className="jobster-timeline-item">
                      <div className="jobster-timeline-cricle">
                        <i className="far fa-circle"></i>
                      </div>
                      <div className="jobster-timeline-info">
                        <div className="dashboard-timeline-info">
                          <span className="jobster-timeline-time">2023</span>
                          <h6 className="mb-2">Durante 2 meses estuve en un proyecto freelance realizando el diseño y maquetado de una web para una constructora utilizando (React).</h6>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Cv;