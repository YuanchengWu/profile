import styled from 'styled-components';

export const Background = styled.div`
  background: radial-gradient(${props => props.theme.fill2}, #000000 173%);
  background-size: cover;
  height: 100vh;
  /* TODO: background pattern */
`;
