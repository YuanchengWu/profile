import styled from 'styled-components';

export const Background = styled.div`
  background: radial-gradient(${props => props.theme.fill2}, #000000 173%);
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  /* TODO: background pattern */
`;
