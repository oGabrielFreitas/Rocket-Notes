import { useEffect, useState } from 'react';
import { Container } from './styles';
import { api } from '../../services/api';

import { PersonDetails } from '../../components/PersonDetails';
import { ButtonText } from '../../components/ButtonText';

import DataTable from 'react-data-table-component';

export function AnswersTable({ ...rest }) {
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

  // (TABELA RESPOSTAS) DEFINIÇÕES DO REACT-DATA-TABLE
  const columns = [
    {
      name: 'Categoria',
      selector: row => row.categoria,
      maxWidth: '100px',
    },
    {
      name: 'Pergunta',
      selector: row => row.pergunta,
    },
    {
      name: 'Resposta',
      selector: row => row.resposta,
    },
    {
      name: 'Pontuação',
      selector: row => row.pontuacao,
      right: true,
      maxWidth: '100px',
      conditionalCellStyles: [
        {
          when: row => row.index_reposta == 2,
          style: {
            backgroundColor: 'rgba(63, 195, 128, 0.9)',
            color: 'white',
            fontWeight: '600',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        {
          when: row => row.index_reposta == 1,
          style: {
            backgroundColor: 'rgba(248, 148, 6, 0.9)',
            color: 'white',
            fontWeight: '600',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        {
          when: row => row.index_reposta == 0,
          style: {
            backgroundColor: 'rgba(242, 38, 19, 0.9)',
            color: 'white',
            fontWeight: '600',
            '&:hover': {
              cursor: 'not-allowed',
            },
          },
        },
      ],
    },
  ];

  console.log(respostas);

  return (
    <Container {...rest}>
      <PersonDetails
        name={records.nome}
        idade={records.idade}
        data_resposta={records.data_criacao}
      />

      <DataTable columns={columns} data={respostas} striped highlightOnHover />
    </Container>
  );
}
