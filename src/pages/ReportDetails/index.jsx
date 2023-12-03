import { Container, Content } from './styles';

import { Header } from '../../components/Header';

import { Section } from '../../components/Section';
// import { Input } from '../../components/Input';
import { AnswersTable } from '../../components/AnswersTable';

function ReportsDetails() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section title="Detalhes">
            <AnswersTable></AnswersTable>
          </Section>
        </Content>
      </main>
    </Container>
  );
}

export { ReportsDetails };
