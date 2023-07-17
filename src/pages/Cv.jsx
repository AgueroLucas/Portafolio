import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsappSquare, FaLinkedin } from 'react-icons/fa';
import Footer from '../components/public/Footer';
import Navbar from '../components/public/NavBar';
import { Progress } from 'antd';
import { Col, Row } from 'antd';

const Cv = () => {
  return (
    <div style={{ background: 'linear-gradient(#f6e282, #fefbef)' }}>
      <Navbar />
      <div className="container">
        <Row>
          <Col span={24}>
            <p></p>
            <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '24px', borderRadius: '20px' }}>
              CURRÍCULUM VITAE
              <div style={{ textAlign: 'right', marginTop: '0px' }}>
                <a
                  href="https://drive.google.com/file/d/1fgQaAoI9MB-sdTiQl0oNtkNyLPEBBbfR/view?usp=drive_link"
                  style={{
                    display: 'inline-block',
                    padding: '10px 10px',
                    background: '#f9e99f',
                    color: 'black',
                    fontSize: '15px',
                    textDecoration: 'none',
                    borderRadius: '5px',
                  }}
                >
                  Descargar C.V.
                </a>
              </div>
            </h2>
          </Col>
        </Row>
        <div className="container">
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '20px', borderRadius: '20px' }}>
                DATOS PERSONALES
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" span={16} offset={4}>
              <p className="text-center">
                <strong>Nombre:</strong> Lucas Ezequiel Agüero
              </p>
              <p className="text-center">
                <strong>Fecha de Nacimiento:</strong> 15/01/1997
              </p>
              <p className="text-center">
                <strong>Nacionalidad:</strong> Argentina
              </p>
              <p className="text-center">
                <strong>Correo Electrónico:</strong> lucasaguero1997@gmail.com
              </p>
              <p className="text-center">
                <strong>Teléfono:</strong>{' '}
                <a href="https://wa.me/5492634368835">
                  <FaWhatsappSquare style={{ fontSize: '35px', color: 'black' }} />
                </a>
              </p>
              <p className="text-center">
                <strong>Linkedln:</strong>{' '}
                <a href="https://www.linkedin.com/in/lucas-ag%C3%BCero-16447724b/">
                  <FaLinkedin style={{ fontSize: '35px', color: 'black' }} />
                </a>
              </p>
            </Col>
          </Row>
        </div>

        <div className="container">
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '20px', borderRadius: '20px' }}>
                EDUCACIÓN/CERTIFICACIONES
              </h2>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" span={12} offset={6}>
              <h3 className="text-center">EEG Cooperation (2022/2022)</h3>
              <p className="text-center">
                Curso de Programación desde Cero de una duración de teóricas y prácticas.
              </p>
              <h3 className="text-center">Coder House (2022/2022)</h3>
              <p className="text-center">
                Curso de Desarrollo web de una duración de 38 horas a lo largo de 10 semanas, cumpliendo todos los
                requisitos académicos exigidos.
              </p>
              <h3 className="text-center">T.TEC San Juan – Cuyo (2022/2023)</h3>
              <p className="text-center">
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
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '20px', borderRadius: '20px' }}>
                IDIOMA
              </h2>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <p className="text-center">Español Latino</p>
            </Col>
          </Row>
        </div>

        <div className="container">
          <Row>
            <Col span={16} offset={4}>
              <h2 className="p-3 mb-2 bg-dark text-white text-center" style={{ fontSize: '20px', borderRadius: '20px' }}>
                CONOCIMIENTOS
              </h2>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              <div>
                <p className="text-center">
                  <strong>JAVASCRIPT</strong>
                </p>
                <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center">
                  <strong>ANGULAR</strong>(poca experiencia)
                </p>
                <Progress percent={50} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center">
                  <strong>GIT</strong>
                </p>
                <Progress percent={90} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center">
                  <strong>CONOCIMIENTOS BASICOS DE SCRUM</strong>
                </p>
                <Progress percent={70} strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} />
              </div>
              <div>
                <p className="text-center">
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