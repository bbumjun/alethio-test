import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const Dot = styled.div`
  position: absolute;
  left: calc(50% - 0.5rem);
  top: calc(50% - 0.5rem);
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  box-shadow: 0px 5px 5px gray;
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
