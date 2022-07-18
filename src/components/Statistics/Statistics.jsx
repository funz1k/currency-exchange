import React from 'react';
import { Container, List, Item } from './Statistics.styled';
import { PropTypes } from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Container>
    <List>
      <Item>Good: {good}</Item>
      <Item>Neutral: {neutral}</Item>
      <Item>Bad: {bad}</Item>
      <Item>Total: {total}</Item>
      <Item>Positive feedback: {positivePercentage}%</Item>
    </List>
  </Container>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
