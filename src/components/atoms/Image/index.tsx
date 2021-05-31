import React, { ReactElement } from 'react';
import { ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
  width: 100%;
`;
export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}
const Image = ({ src, alt = '', ...rest }: ImageProps): ReactElement => (
  <StyledImage src={src} alt={alt} {...rest} />
);

export default React.memo(Image);
