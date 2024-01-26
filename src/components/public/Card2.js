import React, { useState } from 'react';

const Card2 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const cardStyle = {
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    boxShadow: isHovered ? '0px 0px 10px rgba(0, 0, 0, 0.2)' : 'none',
  };

  const imageContainerStyle = {
    maxWidth: '100%',
    maxHeight: '225px', // Ajusta esto según sea necesario
  };

  return (
    <div className="col">
      <div
        className="card shadow-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle}
      >
        <div className="image-container" style={imageContainerStyle}>
          <svg
            className="bd-placeholder-img card-img-top"
            width="100%"
            height="240"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>curriculum</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
            <image
              href="https://i.pinimg.com/736x/7e/4c/21/7e4c212dc25e00d146d5dcfda5a3f059.jpg"
              width="100%"
              height="100%"
              alt="curriculum"
            />
          </svg>
        </div>

        <div className="card-body">
          <p className="card-text" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>Plantilla CV : Plataforma interactiva de currículum vitae que lleva la presentación de mis conocimientos al momento de ponerlos en practica..</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href="https://curriculumestandar.netlify.app/" target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-sm btn-outline-secondary" style={{ fontFamily: 'Kanit', fontWeight: 'lighter' }}>Ir a sitio</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;