import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

import DataTable from 'react-data-table-component';

export function ReportsTable({ ...rest }) {
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

  // DEFINIÇÕES DO REACT-DATA-TABLE
  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      maxWidth: '100px',
      center: true,
    },
    {
      name: 'Nome',
      selector: row => row.nome,
      maxWidth: '300px',
    },
    {
      name: 'Idade',
      selector: row => row.idade,
      sortable: true,
      maxWidth: '100px',
    },
    {
      name: 'Data Resposta',
      selector: row => row.data_criacao,
      sortable: true,
    },
  ];

  return (
    <Container {...rest}>
      <DataTable columns={columns} data={records} pagination />
    </Container>
  );
}
