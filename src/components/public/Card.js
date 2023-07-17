import React, { useState } from 'react';

const Card = () => {
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

  return (
    <div className="col">
      <div
        className="card shadow-sm"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={cardStyle}
      >
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>GrandFriends</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
          <image href="https://www.x-legend.com/online/grandfantasia/assets/images/features/features_2.jpg" width="100%" height="100%" />
        </svg>

        <div className="card-body">
          <p className="card-text">Grand Friends: Una página web que funciona como "Wiki" sobre un juego llamado Grand Fantasia.</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <a href="https://aguerolucas.github.io/GrandFriends/">
                <button type="button" className="btn btn-sm btn-outline-secondary">Ir a sitio</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;