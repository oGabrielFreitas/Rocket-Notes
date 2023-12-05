import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: white;
  padding: 40px 20px;
  border-radius: 10px;
  border-top: 3px solid ${({ theme }) => theme.COLORS.PURPLE};
  box-shadow: ${({ theme }) => theme.SHADOW.LIGHT_SHADOW};
`;
