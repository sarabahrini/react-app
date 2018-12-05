import React from 'react';
import PropTypes from 'prop-types';
import '../styles/page.scss';
import Deck from './deck';

const Page = props => {
  return props.content.map((deck, idx) => (
    <Deck key={'deck'+(idx+1)} deck={deck} id={'deck'+(idx+1)} />
  ));
};

export default Page;