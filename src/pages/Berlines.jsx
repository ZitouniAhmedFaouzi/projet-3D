import React from 'react';
import Navbar from './Navbar.js'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun
import { useState } from 'react';
import ScodaSuperb from '../carModels/SkodaSuperb.jsx';
import MyCanvas from '../carModels/Canvas.jsx';
import Sko from './Sko.jsx';

import { Link } from 'react-router-dom';


// ****************************************************************************

function Modal({ isOpen, onClose, image }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div
      className=""
      onClick={handleOverlayClick}
    >
      <div className="">
        <button onClick={onClose} className="">
          X
        </button>
        
        <MyCanvas comp={image} />
      </div>
    </div>
  );
}




// ****************************************************************************
const Berlines = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage('');
  };


  const cars = [
    {
      id: 1,
      name: 'BMW M3',
      image: require('../images/m3.png'),
      description: [
        '- Un design agressif et dynamique avec une couleur bleue saisissante',
        '- Un intérieur sport haut de gamme avec des finitions premium',
        '- Une puissance impressionnante grâce à son moteur six cylindres en ligne',
        '- Des technologies de conduite avancées pour une performance maximale',
        '- Une tenue de route précise et une conduite excitante',
      ],
      
      price: 'à partir de 8000 Da/jour',
      image2: require('../images/m3.png'), // Deuxième image pour l'effet de transition
      cmp: 'BMWM3.glb',
      link:'sko'

    },
    {
      id: 2,
      name: 'Skoda Superb',
      image: require('../images/skoda.png'),
      description: [
        '- Un design élégant et moderne avec une teinte bleue raffinée',
        '- Un intérieur spacieux et confortable avec des matériaux de qualité',
        '- Une conduite fluide et stable, idéale pour les longs trajets',
        '- Des technologies innovantes pour un confort optimal',
        '- Une consommation de carburant efficace et des faibles émissions',
      ],
      
      price: 'à partir de 9000 Da/jour',
      image2: require('../images/skoda.png'), // Deuxième image pour l'effet de transition
      cmp: 'SkodaSuperb.glb',
      link:'sko'
    },
    {
      id: 3,
      name: 'Mercedes C63',
      image: require('../images/c63_0.png'),
      description: [
        '- Un design agressif et élégant, accentué par une couleur blanche pure',
        '- Un intérieur luxueux avec des finitions en cuir et des détails haut de gamme',
        '- Une performance exceptionnelle grâce à son moteur V8 biturbo puissant',
        '- Des technologies avancées pour une expérience de conduite supérieure',
        '- Une tenue de route précise et une dynamique de conduite sport',
      ],
      
      price: 'à partir de 9000 Da/jour',
      image2: require('../images/c63_0.png'), // Deuxième image pour l'effet de transition
      cmp: 'mercedesc63.glb',
      link:'Mer'
    },

  ];

  return (
    <div className="categories-container">
      <Navbar />
      <h1 className="category-title">Berlines</h1>
      <p className="category-description">
        Découvrez notre gamme de berlines confortables et élégantes pour tous vos besoins.
      </p>
      <div className="categories-grid">
        {cars.map((car) => {
          // Remplace les caractères non alphabétiques par des tirets
          const carNameSlug = car.name.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-');

          return (
            <div key={car.id} className="car-card">
              <div className="card">
                <div className="wrapper">
                  <img src={car.image} alt={car.name} className="cover-image" />
                </div>
                
                <img src={car.image2} alt={car.name} className="character" />
              </div>
              <h2>{car.name}</h2>
              <div>
                {Array.isArray(car.description) ? (
                  car.description.map((point, index) => (
                    <p key={index}>{point}</p>
                  ))
                ) : (
                  <p>{car.description}</p>
                )}
              </div>
              <p className="car-price">{car.price}</p>
              <a href={`/berlines/${carNameSlug}`} className="details-link">
                Voir les détails
              </a><br />
             
        <div>
              
              {/* <MyCanvas comp={car.cmp} /> */}
              {/* <Link to="/sko" className="">3ddddddddddddddddddD</Link> */}
              <Link to={`/${car.link}`} state={{ carModel: car.cmp }}>Voir le modèle </Link>

             
              </div>
            </div>
          );
        })}
      </div>
      {/* <Modal isOpen={isModalOpen} onClose={closeModal} image={selectedImage} /> */}
      

    </div>
  );
};

export default Berlines;
