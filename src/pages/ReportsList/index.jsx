import { Container, Content } from './styles';

import { Header } from '../../components/Header';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
// import { Input } from '../../components/Input';
import { ReportsTable } from '../../components/ReportsTable';

function ReportsList() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section title="Relatórios cadastrados">
            <ReportsTable></ReportsTable>
          </Section>

          <ButtonText title="Sair" />

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

export { ReportsList };
