import { Container, Content } from './styles';

import { Header } from '../../components/Header';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Input } from '../../components/Input';

function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section title="Relatórios cadastrados">
            <Input />

            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Section>

          <ButtonText title="Sair" onClick />

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

export { Details };
