import DataTable from 'react-data-table-component';
import { useState, useMemo } from 'react';

import { Container } from './styles';

import { Input } from '../../Input';
import { ButtonText } from '../../ButtonText';

import { FiSearch } from 'react-icons/fi';

const FilterComponent = ({ filterText, onFilter, onClear }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '20fr 3fr',
        maxWidth: '50%',
        marginBottom: '20px',
        alignSelf: 'center',
      }}
    >
      <Input
        icon={FiSearch}
        placeholder="Pesquisar por nome"
        value={filterText}
        onChange={onFilter}
      />
      <ButtonText title="Limpar" onClick={onClear} />
    </div>
  );
};

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
      sortable: true,

      maxWidth: '300px',
    },
    {
      name: 'Idade',
      selector: row => row.idade,
      sortable: true,
      maxWidth: '100px',
    },
    {
      id: 'data_resposta',
      name: 'Data Resposta',
      selector: row => row.data_criacao,
      sortable: true,
    },
  ];

  // FUNÇÃO DE PESQUISA DE PESQUISA
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    data =>
      data.nome && data.nome.toLowerCase().includes(filterText.toLowerCase()),
  );

  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };

  return (
    <div>
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />

      <Container {...rest}>
        <DataTable
          columns={columns}
          data={filteredItems}
          striped
          highlightOnHover
          fixedHeader
          responsive
          defaultSortFieldId={'data_resposta'}
          defaultSortAsc={false}
          pagination
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          // subHeader
          // subHeaderComponent={subHeaderComponentMemo}
          // selectableRows
          persistTableHead
          // paginationPerPage={5}
        />
      </Container>
    </div>
  );
}
