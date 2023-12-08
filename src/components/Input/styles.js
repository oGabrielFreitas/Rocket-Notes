import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY_TEXT};

  /* margin-bottom: 15px; */
  border-radius: 10px;

  justify-content: center;
  align-items: center;

  > input {
    height: 50px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GRAY_TEXT};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 2px;
  }
`;
