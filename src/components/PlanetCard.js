import React from 'react';

class PlanetCard extends React.Component {
  render() {
    const { name, image } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{this.props.planetName}</p>
        <img src={ this.props.planetImage } alt={ `Planeta ${this.props.planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;
