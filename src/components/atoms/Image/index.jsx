import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
`;
const Image = ({ src, alt, className }) => (
  <StyledImage src={src} alt={alt} className={className} />
);

export default Image;
