import React from 'react';
import { SectionWrap, Heading } from './Section.styled';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <SectionWrap>
    <Heading>{title}</Heading>
    {children}
  </SectionWrap>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Section;
