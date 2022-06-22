import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <>
        <div data-testid="missions" className="container">
          <Title headline="Missões" />
        </div>
        <section className="container-mission">
          {
            missions.map((mission, index) => (<MissionCard
              key={ index }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }

            />))
          }
        </section>
      </>
    );
  }
}

export default Missions;
