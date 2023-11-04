import { Container } from './styles';

import { Button } from '../../components/Button';

function Details() {
  return (
    <Container>
      <h1>Hello World</h1>
      <span>Gabriel Freitas</span>
      <Button title="Entrar" loading />
      <Button title="Entrar" disabled />
      <Button title="Voltar" />
    </Container>
  );
}

export { Details };
