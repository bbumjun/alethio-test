import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
`;
const Image = ({ src, alt, className, width, height }) => (
  <StyledImage
    src={src}
    alt={alt}
    className={className}
    width={width}
    height={height}
  />
);

export default Image;
