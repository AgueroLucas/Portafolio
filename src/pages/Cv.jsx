import React from 'react';
import { FaWhatsappSquare, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import Footer from '../components/public/Footer';
import Navbar from '../components/public/NavBar';
import { Progress } from 'antd';
import { Col, Row } from 'antd';
import ScrollToTop from 'react-scroll-to-top';

const Cv = () => {
  return (
    <div style={{ background: 'linear-gradient(#D8D6DB, #F9F8FC)' }}>
      <Navbar />
      <div className="container">
        <ScrollToTop smooth color="#000" />
        <Row>
          <Col span={24}>
            <p></p>
            <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '28px', borderRadius: '20px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>
              CURRÍCULUM VITAE
              <div style={{ textAlign: 'right', marginTop: '0px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <a
                  href="https://drive.google.com/file/d/1ofHlofA2vkeACIt5bZmZSXBbYIZdpjd9/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '10px 10px',
                    background: '#D8D6DB',
                    color: 'black',
                    fontSize: '18px',
                    borderRadius: '5px',
                    
                  }}
                >
                <FaFileDownload style={{ marginRight: '5px' }} />
                </a>
              </div>
            </h2>
          </Col>
        </Row>
        <div className="container">
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '24px', borderRadius: '20px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                DATOS PERSONALES
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" span={16} offset={4}>
              <p className="text-center" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <strong>Nombre:</strong> Lucas Ezequiel Agüero
              </p>
              <p className="text-center" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <strong>Fecha de Nacimiento:</strong> 15/01/1997
              </p>
              <p className="text-center" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <strong>Nacionalidad:</strong> Argentina
              </p>
              <p className="text-center" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <strong>Correo Electrónico:</strong> lucasaguero1997@gmail.com
              </p>
              <p className="text-center" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <strong>Teléfono:</strong>{' '}
                <a href="https://wa.me/5492634368835" target="_blank" rel="noopener noreferrer">
                  <FaWhatsappSquare style={{ fontSize: '35px', color: 'black' }} />
                </a>
              </p>
              <p className="text-center" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                <strong>Linkedln:</strong>{' '}
                <a href="https://www.linkedin.com/in/lucas-ag%C3%BCero-16447724b/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin style={{ fontSize: '35px', color: 'black' }} />
                </a>
              </p>
            </Col>
          </Row>
        </div>

        <div className="container" style={{ fontSize: '18px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '24px', borderRadius: '20px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                CERTIFICACIONES
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" span={12} offset={6}>
              <h3 className="text-center" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>EEG Cooperation (2022/2022)</h3>
              <p className="text-center" style={{ fontSize: '16px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                Curso de Programación desde Cero de una duración de teóricas y prácticas.
              </p>
              <h3 className="text-center" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>Coder House (2022/2022)</h3>
              <p className="text-center" style={{ fontSize: '16px',fontFamily: 'Kanit', fontWeight: 'lighter' }} >
                Curso de Desarrollo web de una duración de 38 horas a lo largo de 10 semanas, cumpliendo todos los
                requisitos académicos exigidos.
              </p>
              <h3 className="text-center" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>T.TEC San Juan – Cuyo (2022/2023)</h3>
              <p className="text-center" style={{ fontSize: '16px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                Curso de Programador Full Stack - Python de una duración de 500 horas certificado por la Universidad
                Nacional de San Juan (UNSJ), la Cámara de Empresas de Tecnologías y Comunicaciones de San Juan (CASETIC) y
                el Ministerio de Trabajo, Empleo y Seguridad Social de la Nación.
              </p>
            </Col>
          </Row>
        </div>

        <div className="container">
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '24px', borderRadius: '20px',fontFamily: 'Kanit', fontWeight: 'lighter'  }}>
                IDIOMA
              </h2>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <p className="text-center" style={{fontSize: '18px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>Español Latino</p>
            </Col>
          </Row>
        </div>

        <div className="container">
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '24px', borderRadius: '20px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                CONOCIMIENTOS
              </h2>
            </Col>
          </Row>
          <Row>
            <Col style={{marginBottom: '20px'}} span={12} offset={6}>
              <div>
                <p className="text-center" style={{fontSize: '16px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                  <strong>JAVASCRIPT</strong>
                </p>
                <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center" style={{fontSize: '16px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                  <strong>ANGULAR</strong> (poca experiencia)
                </p>
                <Progress percent={50} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center" style={{fontSize: '16px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                  <strong>GIT</strong>
                </p>
                <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center" style={{fontSize: '16px', fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                  <strong>CONOCIMIENTOS BASICOS DE SCRUM</strong>
                </p>
                <Progress percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center" style={{fontSize: '16px',fontFamily: 'Kanit', fontWeight: 'lighter' }}>
                  <strong>REACT</strong>
                </p>
                <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cv;