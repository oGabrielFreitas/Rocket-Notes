import { useEffect, useState } from 'react';

import { api } from '../../services/api';
import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
// import { Input } from '../../components/Input';
import { AnswersTable } from '../../components/AnswersTable';
import { PersonDetails } from '../../components/PersonDetails';
import { ButtonText } from '../../components/ButtonText';

function ReportsDetails() {
  //
  // Seta a const, que vai receber os dados
  const [records, setRecords] = useState([]);
  const [respostas, setRespostas] = useState([]);

  // Busca os dados na api de maneira assincrona apenas 1x no carregamento
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/reports/read/6');

        response.data.respostas = JSON.parse(response.data.respostas);

        setRecords(response.data);
        setRespostas(response.data.respostas);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };
    fetchData();
  }, []); // Array de dependências vazio para executar apenas na montagem

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section title="Detalhes">
            <PersonDetails
              name={records.nome}
              idade={records.idade}
              data_resposta={records.data_criacao}
            />
            <ButtonText title="Voltar" style={{ marginBottom: 20 }} />
            <AnswersTable data={respostas}></AnswersTable>
          </Section>
        </Content>
      </main>
    </Container>
  );
}

export { ReportsDetails };
