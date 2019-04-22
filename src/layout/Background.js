import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  overflow: hidden;
  background: radial-gradient(${props => props.theme.fill2}, #000000 173%);
  background-size: cover;
  /* TODO: background pattern */
`;
