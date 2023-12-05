import { Container } from './styles';

export function RoundedDiv({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
