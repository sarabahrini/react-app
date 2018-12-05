import React from 'react';
import PropTypes from 'prop-types';
import '../styles/deck.scss';
import Card from './card';

const Deck = props => {
  return (
    <section id={props.id} className='deck'>
      <header>
        <h2>{props.deck.deckTitle} Projects</h2>
      </header>
      <div className='flex-container'>
        {props.deck.records.map((card, idx) => (
          <Card key={'card'+(idx + 1)+props.id} card={card} id={'card'+(idx + 1)+props.id} />
        ))}
      </div>
    </section>
  );
};

Deck.propTypes = {
  id: PropTypes.string,
  deck: PropTypes.object
};

export default Deck;