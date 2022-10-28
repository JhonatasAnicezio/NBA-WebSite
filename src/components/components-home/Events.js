import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardEvent from './CardEvent';
import './Events.css';

function Events({ events }) {
  return (
    <div className='container-events'>
      { events.map((eve, index) =>
        <CardEvent key={ index } eve={eve} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return { events: state.scores.events };
}

Events.propTypes = {
  events: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Events);