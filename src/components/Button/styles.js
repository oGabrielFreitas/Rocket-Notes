import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  color: ${({ theme }) => theme.COLORS.OFF_WHITE};

  height: 46px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 5px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  // Podemos utilizar o & também para o hover, exemplo:
  &:hover {
    // Estilização
  }
`;
