import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun
import { Link } from 'react-router-dom';

const Luxury = () => {
  const cars = [
    {
      id: 1,
      name: 'BMW M4',
      image: require('../images/m4.png'),
      description: [
        '- Un design racé et imposant avec une finition noire élégante',
        '- Un intérieur sportif et raffiné avec des matériaux de haute qualité',
        '- Une performance de haut niveau grâce à son moteur six cylindres en ligne turbo',
        '- Des technologies de conduite avancées pour des performances optimales',
        '- Une agilité exceptionnelle et une conduite précise sur tous types de routes',
      ],
      
      price: 'à partir de 25000 Da/jour',
      image2: require('../images/m4.png'),
    },
    {
      id: 2,
      name: 'Mercedes G 63',
      image: require('../images/g.png'),
      description: [
        '- Un design imposant et robuste avec une finition blanche distinctive',
        '- Un intérieur luxueux alliant confort et matériaux haut de gamme',
        '- Une puissance phénoménale grâce à son moteur V8 biturbo',
        '- Des technologies de pointe pour une expérience de conduite premium',
        '- Une capacité de franchissement exceptionnelle et une tenue de route remarquable',
      ],
      price: 'à partir de 25000 Da/jour',
      image2: require('../images/g.png'),
       cmp: 'MercedesG-Wagon.glb',
      link:'MerG'
    },

  ];

  return (
    <div className="categories-container">
      <Navbar />
      <h1 className="category-title">Luxury</h1>
      <p className="category-description">
        Découvrez notre gamme de voitures de luxe pour un confort ultime.
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

export default Luxury;
