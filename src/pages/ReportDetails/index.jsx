import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { FaUser, FaChartSimple, FaRectangleList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Container, Content } from './styles';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { AnswersTable } from '../../components/Tables/AnswersTable';
import { PersonDetails } from '../../components/PersonDetails';
import { ReportBarChart } from '../../components/Charts/ReportBarChart';
import { ReportRadarChart } from '../../components/Charts/ReportRadarChart';
import { RoundedDiv } from '../../components/RoundedDiv';

function ReportsDetails() {
  //
  // Seta a const, que vai receber os dados
  const [records, setRecords] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [pending, setPending] = useState(true);

  const params = useParams();

  // Busca os dados na api de maneira assincrona apenas 1x no carregamento
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/api/reports/read/${params.id}`);

        response.data.respostas = JSON.parse(response.data.respostas);

        setRecords(response.data);
        setRespostas(response.data.respostas);
        setPending(false);
      } catch (error) {
        console.error('Erro ao buscar dados', error);
      }
    };
    fetchData();
  }, [params.id]); // Array de dependências vazio para executar apenas na montagem

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <Section
            icon={FaUser}
            title="Detalhes do Paciente"
            style={{ marginBottom: '0px' }}
          >
            <PersonDetails
              name={records.nome}
              idade={records.idade}
              data_resposta={records.data_criacao}
              email={records.email}
            />
            <Link to="/">Voltar</Link>
          </Section>
          {/* <ButtonText title="Voltar" style={{ marginBottom: 20 }} /> */}
          <Section icon={FaChartSimple} title="Gráficos das Respostas">
            <RoundedDiv>
              <ReportBarChart data={records.pontuacao} />
              <ReportRadarChart data={records.pontuacao} />
            </RoundedDiv>
          </Section>
          <Section
            icon={FaRectangleList}
            title="Tabela de Respostas"
            style={{ marginBottom: 100 }}
          >
            <AnswersTable data={respostas} pending={pending}></AnswersTable>
          </Section>
        </Content>
      </main>
    </Container>
  );
}

export { ReportsDetails };
