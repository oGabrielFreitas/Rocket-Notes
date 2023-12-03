import { Container } from './styles';

import DataTable from 'react-data-table-component';

export function ReportsTable({ data, ...rest }) {
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
      <DataTable
        columns={columns}
        data={data}
        striped
        highlightOnHover
        fixedHeader
        // fixedHeaderScrollHeight="50vh"
        pagination
      />
    </Container>
  );
}
