import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun
import { Link } from 'react-router-dom';

const SUV = () => {
  const cars = [
    {
      id: 1,
      name: 'Mercedes GLS',
      image: require('../images/gls.png'),
      description: [
        '- Un design majestueux et élégant, symbolisant le luxe de Mercedes-Benz',
        '- Un intérieur opulent avec des matériaux haut de gamme et une finition soignée',
        '- Une puissance impressionnante grâce à des moteurs performants',
        '- Des technologies de conduite innovantes pour un confort et une sécurité optimaux',
        '- Un espace généreux et une capacité de chargement exceptionnelle pour toute la famille',
      ],
      
      price: 'à partir de 9000 Da/jour',
      image2: require('../images/gls.png'),
    },
    {
      id: 2,
      name: 'Hyundai Creta',
      image: require('../images/creta.png'),
      description: [
        '- Un design moderne et raffiné avec une teinte blanche éclatante',
        '- Un intérieur spacieux et confortable, idéal pour toute la famille',
        '- Une conduite fluide et agréable, parfaite pour la ville et les trajets quotidiens',
        '- Des équipements technologiques pour une conduite sécurisée et connectée',
        '- Une consommation de carburant efficace pour des déplacements économiques',
      ],
      price: 'à partir de 8000 Da/jour',
      image2: require('../images/creta.png'),
    },
    {
      id: 3,
      name: 'Peugeot 3008',
      image: require('../images/3008.png'),
      description: [
        '- Un design dynamique et contemporain avec une silhouette audacieuse',
        '- Un intérieur moderne et ergonomique, conçu pour le confort des passagers',
        '- Des performances équilibrées avec une conduite agréable en ville et sur route',
        '- Des technologies avancées pour une conduite connectée et sécurisée',
        '- Une consommation de carburant optimisée pour un usage quotidien économique',
      ],
      
      price: 'à partir de 9000 Da/jour',
      image2: require('../images/3008.png'),
      cmp: 'peugeot3008.glb',
      link:'pgt'
    },
  ];

  return (
    <div className="categories-container">
      <Navbar />
      <h1 className="category-title">SUV</h1>
      <p className="category-description">
        Découvrez notre gamme de voitures SUV pour un confort ultime.
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

              <div>
              
              {/* <MyCanvas comp={car.cmp} /> */}
              {/* <Link to="/sko" className="">3ddddddddddddddddddD</Link> */}
              <Link to={`/${car.link}`} state={{ carModel: car.cmp }}>Voir le modèle </Link>

             
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SUV;
