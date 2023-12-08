import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: ${({ theme }) => theme.SHADOW.LIGHT_SHADOW};
  border-top: 3px solid ${({ theme }) => theme.COLORS.PURPLE};
  border-radius: 10px;

  .rdt_TableHeadRow {
    box-shadow: ${({ theme }) => theme.SHADOW.LIGHT_SHADOW};
  }

  // Você pode continuar adicionando estilos personalizados para outras classes
`;
