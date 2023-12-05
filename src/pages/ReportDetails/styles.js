import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: scroll;
    /* padding: 64px 0; */
  }
`;

export const Content = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;
