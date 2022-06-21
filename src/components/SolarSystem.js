import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <section className="container-cards">
          {
            Planets.map((planetas, index) => (<PlanetCard
              key={ index }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />))
          }
        </section>
      </div>
    );
  }
}

export default SolarSystem;
