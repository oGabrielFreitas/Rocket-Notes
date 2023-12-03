import { Container, Content } from './styles';

import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { Header } from '../../components/Header';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
// import { Input } from '../../components/Input';
import { ReportsTable } from '../../components/ReportsTable';

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
          <Section title="Relatórios cadastrados">
            <ReportsTable data={records}></ReportsTable>
          </Section>

          <ButtonText title="Sair" />

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}

export { ReportsList };
