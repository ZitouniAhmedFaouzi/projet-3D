import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun

const Berlines = () => {
  const cars = [
   /* {
      id: 1,
      name: 'Hyundai I10',
      image: require('../images/i10.png'),
      description: 'Berline élégante et spacieuse, idéale pour la conduite en ville.',
      price: 'à partir de 25€/jour',
      image2: require('../images/i10.png'), // Deuxième image pour l'effet de transition
    },
    {
      id: 2,
      name: 'Suzuki Swift',
      image: require('../images/swift.png'),
      description: 'Confort et performance pour un voyage agréable.',
      price: 'à partir de 28€/jour',
      image2: require('../images/swift.png'), // Deuxième image pour l'effet de transition
    },
    {
      id: 3,
      name: 'Kia Picanto Lx',
      image: require('../images/picantoLx.png'),
      description: 'Un design sportif avec des technologies avancées.',
      price: 'à partir de 45€/jour',
      image2: require('../images/picantoLx.png'), // Deuxième image pour l'effet de transition
    },
    {
      id: 4,
      name: 'Kia Rio Coupé',
      image: require('../images/rio.png'),
      description: 'Luxe et confort ultime pour chaque trajet.',
      price: 'à partir de 50€/jour',
      image2: require('../images/rio.png'), // Deuxième image pour l'effet de transition
    },*/
  ];

  return (
    <div className="categories-container">
      <Navbar />
      <h1 className="category-title">Citadine</h1>
      <p className="category-description">
        Découvrez notre gamme de Citadine confortables et élégantes pour tous vos besoins.
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
              <p>{car.description}</p>
              <p className="car-price">{car.price}</p>
              <a href={`/berlines/${carNameSlug}`} className="details-link">
              Voir les détails
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Berlines;
