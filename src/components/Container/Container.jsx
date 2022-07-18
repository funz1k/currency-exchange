import React from 'react';
import { Title, Section } from './Container.styled';

const Container = ({ title, children }) => (
  <Section>
    <Title>{title}</Title>
    {children}
  </Section>
);

export default Container;
