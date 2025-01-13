import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun
import { Link } from 'react-router-dom';

const Sport = () => {
  const cars = [
    {
      id: 1,
      name: 'volkswagen Golf 8',
      image: require('../images/golf8.png'),
      description: [
        '- Un design moderne et raffiné',
        '- Un intérieur spacieux et confortable',
        '- Une conduite agile, parfaite en ville',
        '- Des équipements technologiques avancés',
        '- Une consommation de carburant économique',
      ],
      price: 'à partir de 12000 Da/jour',
      image2: require('../images/golf8.png'),
      cmp: 'VolkswagenGolf.glb',
      link:'golf'
    },

    {
      id: 3,
      name: 'Audi R8',
      image: require('../images/r8.png'),
      description: [
        '- Un design sportif et aérodynamique, signature Audi',
        '- Un intérieur luxueux avec des matériaux haut de gamme',
        '- Une performance exceptionnelle avec un moteur V10 puissant',
        '- Des technologies de pointe pour une conduite optimale',
        '- Une expérience de conduite intense et dynamique',
      ],
      price: 'à partir de 16000 Da/jour',
      image2: require('../images/r8.png'),
    },
  ];

  return (
    <div className="categories-container">
      <Navbar />
      <h1 className="category-title">Sport</h1>
      <p className="category-description">
        Découvrez notre gamme de voitures sport pour une performance inégalée et un confort ultime, alliant élégance et dynamisme.
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
              <Link to={`/${car.link}`} state={{ carModel: car.cmp }}>Voir le modèle </Link>
              </div>
              

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sport;
