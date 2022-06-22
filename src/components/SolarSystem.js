import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div data-testid="solar-system" className="container">
          <Title headline="Planetas" />
        </div>
        <section className="container-planet">
          {
            Planets.map((planetas, index) => (<PlanetCard
              key={ index }
              planetName={ planetas.name }
              planetImage={ planetas.image }
            />))
          }
        </section>
      </>
    );
  }
}

export default SolarSystem;
