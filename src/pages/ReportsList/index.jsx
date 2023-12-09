import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Container, Content } from './styles';
import { FaRectangleList } from 'react-icons/fa6';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { ReportsTable } from '../../components/Tables/ReportsTable';

function ReportsList() {
  // Seta a const, que vai receber os dados
  const [records, setRecords] = useState([]);

  // Busca os dados na api de maneira assincrona apenas 1x no carregamento
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/api/reports/list');
        console.log(response.data);
        setRecords(response.data); // Armazena os dados no estado
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
          <Section icon={FaRectangleList} title="Lista de Respostas">
            <ReportsTable data={records}></ReportsTable>
          </Section>
        </Content>
      </main>
    </Container>
  );
}

export { ReportsList };
