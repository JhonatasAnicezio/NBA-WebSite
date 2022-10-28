import React from 'react';
import PropTypes from 'prop-types';
import './CardEvent.css';
import { newDate } from '../../services/convertDate';

function CardEvent({ eve }) {
  const { competitors } = eve.competitions[0];
  const split = eve.date.split('T');
  const date = split[0];
  const hours = split[1].split('Z');
  
  return (
    <div className='container-cardEvent'>
      <h2>{ newDate(date).toUpperCase() }</h2>
      { competitors.map((competitor, index) =>{
        const { team } = competitor;
        return (
          <div className='container-team' key={ index }>
            <img
              src={ team.logo }
              alt='logo'
            />
            <h3>{ team.abbreviation }</h3>
          </div>
        );
      }) }
      <h2>{ hours }</h2>
    </div>
  );
}

CardEvent.propTypes = {
  eve: PropTypes.object.isRequired,
};

export default CardEvent;