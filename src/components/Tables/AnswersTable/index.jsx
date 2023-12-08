import { Container } from './styles';

import DataTable from 'react-data-table-component';

export function AnswersTable({ data, pending, ...rest }) {
  // (TABELA RESPOSTAS) DEFINIÇÕES DO REACT-DATA-TABLE
  const columns = [
    {
      name: 'Categoria',
      selector: row => row.categoria,
      maxWidth: '120px',
      sortable: 'true',
      wrap: true,
    },
    {
      name: 'Pergunta',
      selector: row => row.pergunta,
      // maxWidth: '50%',
      wrap: true,
    },
    {
      name: 'Resposta',
      selector: row => row.resposta,
      // maxWidth: '500px',
      wrap: true,
    },
    {
      name: 'Pontuação',
      selector: row => row.pontuacao,
      right: true,
      // compact: 1,
      maxWidth: '120px',
      wrap: true,
      sortable: 'true',
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

  return (
    <Container {...rest}>
      <DataTable
        columns={columns}
        data={data}
        striped
        highlightOnHover
        fixedHeader
        fixedHeaderScrollHeight="400px"
        responsive
        progressPending={pending}
      />
    </Container>
  );
}
