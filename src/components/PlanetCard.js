import React from 'react';

class PlanetCard extends React.Component {
  render() {
    return (
      <div data-testid="planet-card">
        <span data-testid="planet-name">{this.props.planetName}</span>
        <img src={ this.props.planetImage } alt={ `Planeta ${this.props.planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;
