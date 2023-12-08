import DataTable from 'react-data-table-component';
import { useState, useMemo } from 'react';

import { Container } from './styles';

import { Input } from '../../Input';
import { FiSearch } from 'react-icons/fi';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div style={{ display: 'flex' }}>
    <Input
      icon={FiSearch}
      id="search"
      type="text"
      placeholder="Filtrar por nome"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <button onClick={onClear}>Limpar</button>
  </div>
);

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

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div>
      <subHeaderComponentMemo />
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
          // persistTableHead
        />
      </Container>
    </div>
  );
}
