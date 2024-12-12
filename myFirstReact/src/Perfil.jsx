import { useState } from 'react';
import './App.css';
import defecto from './defecto.png';
import PropTypes from 'prop-types';

function Perfil({ nombre, email, bio, skills = [], isPremium, imageUrl }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <section
      className={`container ${isPremium ? 'premium' : ''} ${isFavorite ? 'favorite' : ''}`}
    >
      <img
        src={imageUrl ? imageUrl : defecto} // Usa la imagen de la base de datos si existe, sino usa la imagen por defecto
        alt={`Foto de perfil de ${nombre}`}
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = defecto; // En caso de error, usa la imagen por defecto
        }}
      />
      <div className="info">
        <h2>{nombre}</h2>
        <p>Email: {email}</p>
        <p>{bio || 'No hay información disponible.'}</p>
        <ul>
          {skills.length > 0 && skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
        {isPremium && <span className="badge">Premium</span>}
        <button className="favorite-button" onClick={toggleFavorite}>
          {isFavorite ? '⭐ Quitar Favorito' : '☆ Marcar como Favorito'}
        </button>
      </div>
    </section>
  );
}

Perfil.propTypes = {
  nombre: PropTypes.string.isRequired,
  email: PropTypes.string,
  bio: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool,
  imageUrl: PropTypes.string,
};

export default Perfil;