import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.scss';

const Card = props => {
  return (
    <div className="card">
      <h3>{props.card.title}</h3>
      <p>{props.card.copy}</p>
      <img src={props.card.media.href} alt={props.card.media.alt} width="200px" />
      <span>{props.card.media.title}</span>
      {props.card.links.map((link, idx) => (
        <a key={'link'+(idx+1)+props.id} className={link.type} href={link.href}>
          {link.title}
        </a>
      ))}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  id: PropTypes.string
};

export default Card;