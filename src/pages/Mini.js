import React from 'react';
import Navbar from './Navbar'; // Importer la barre de navigation
import '../styles/categories.css'; // Importer le fichier CSS commun
import { Link } from 'react-router-dom';

const Mini = () => {
    const cars = [{
            id: 1,
            name: 'Kia Picanto',
            image: require('../images/picanto.png'),
            description: [
                '- Un design compact et moderne, parfait pour les villes animées',
                '- Un intérieur fonctionnel et confortable, avec un agencement intelligent',
                '- Une conduite agile et dynamique, idéale pour les trajets urbains',
                '- Des équipements technologiques pratiques pour un confort quotidien',
                '- Une consommation de carburant très économique, adaptée à un usage urbain',
            ],

            price: 'à partir de 6000 Da/jour',
            image2: require('../images/picanto.png'), // Deuxième image pour l'effet de transition
        },
        {
            id: 2,
            name: 'Fiat 500',
            image: require('../images/fiat-500.png'),
            description: [
                '- Un design iconique et rétro avec une touche moderne, parfaitement identifiable',
                '- Un intérieur chic et compact, avec des finitions soignées et colorées',
                '- Une conduite vive et amusante, idéale pour les petites rues et les trajets urbains',
                '- Des technologies intuitives pour une expérience de conduite agréable',
                '- Une consommation de carburant économique, idéale pour la ville et les petits trajets',
            ],
            price: 'à partir de 7000 Da/jour',
            image2: require('../images/fiat-500.png'), // Deuxième image pour l'effet de transition
             cmp: 'Fiat500.glb',
             link:'fiat'
        },
    ];

    return ( <
        div className = "categories-container" >
        <
        Navbar / >
        <
        h1 className = "category-title" > Mini < /h1>
        <p className = "category-description">
        Découvrez notre gamme de mini - cars pour des trajets pratiques et économiques. <
        /p> <
        div className = "categories-grid" > {
            cars.map((car) => {
                // Remplace les caractères non alphabétiques par des tirets
                const carNameSlug = car.name.toLowerCase().replace(/[^a-z\s]/g, '').replace(/\s+/g, '-');

                return ( <
                    div key = { car.id }
                    className = "car-card" >
                    <
                    div className = "card" >
                    <
                    div className = "wrapper" >
                    <
                    img src = { car.image }
                    alt = { car.name }
                    className = "cover-image" / >
                    <
                    /div>

                    <
                    img src = { car.image2 }
                    alt = { car.name }
                    className = "character" / >
                    <
                    /div> <
                    h2 > { car.name } < /h2> <
                    div > {
                        Array.isArray(car.description) ? (
                            car.description.map((point, index) => ( <
                                p key = { index } > { point } < /p>
                            ))
                        ) : ( <
                            p > { car.description } < /p>
                        )
                    } <
                    /div> <
                    p className = "car-price" > { car.price } < /p>  
                    <div>
              
                    {/* <MyCanvas comp={car.cmp} /> */}
                    {/* <Link to="/sko" className="">3ddddddddddddddddddD</Link> */}
                    <Link to={`/${car.link}`} state={{ carModel: car.cmp }}>Voir le modèle </Link>
      
                   
                    </div>
                    
                    </div>
                );
            })
        } <
        /div> <
        /div>
    );
};

export default Mini;