import React from 'react';
import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
`;
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}
const Image = ({ ...rest }: ImageProps) => <StyledImage {...rest} />;

export default React.memo(Image);
