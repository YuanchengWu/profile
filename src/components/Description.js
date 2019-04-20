import React from 'react';
import styled from 'styled-components';

const Text = styled.p`
  font-family: 'Chakra Petch', sans-serif;
  font-size: 24px;
  color: ${props => props.theme.fill6};
  text-shadow: 0 0 5px ${props => props.theme.fill3},
    0 0 10px ${props => props.theme.fill4},
    0 0 15px ${props => props.theme.fill5};
`;

export default function Description(props) {
  return <Text>{props.description}</Text>;
}
