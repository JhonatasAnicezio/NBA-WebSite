import React from 'react';
import PropTypes from 'prop-types';
import './CardNew.css';

function CardNew({ url, description, link }) {
  return (
    <div className='container-cardNew'>
      <a href={ link } target='blank'>
        <img src={ url } alt='imagem' />
        <p>{ description }</p>
      </a>
    </div>
  );
}

CardNew.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardNew;