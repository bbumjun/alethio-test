import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100%;
`;
const Dot = styled.div`
  position: absolute;
  left: -1rem;
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: ${(props) => props.color};
  animation: 0.5s ease-out 0s infinite alternate
    ${(props) => props.animationType};

  @keyframes slideLeft {
    from {
      transform: translateX(2rem);
    }
    to {
      transform: translateX(-2rem);
    }
  }
  @keyframes slideRight {
    from {
      transform: translateX(-2rem);
    }
    to {
      transform: translateX(2rem);
    }
  }
  @keyframes slideUp {
    from {
      transform: translateY(-2rem);
    }
    to {
      transform: translateY(2rem);
    }
  }
  @keyframes slideDown {
    to {
      transform: translateY(2rem);
    }
    to {
      transform: translateY(-2rem);
    }
  }
`;

const Loader = () => (
  <Wrapper>
    <Dot animationType="slideRight" color="black" />
    <Dot animationType="slideUp" color="red" />
    <Dot animationType="slideDown" color="blue" />
    <Dot animationType="slideLeft" color="green" />
  </Wrapper>
);
export default Loader;
