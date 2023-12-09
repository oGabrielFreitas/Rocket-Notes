import DataTable from 'react-data-table-component';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataFormater } from '../../../helpers/formatData';

import { Container } from './styles';

import { Input } from '../../Input';
import { ButtonText } from '../../ButtonText';

import { FiSearch } from 'react-icons/fi';

// --------------------------------------------------------------------------

// COMPONENTES AUXILIARES
// Caixa de pesquisa
const _filtercomponent = ({ filterText, onFilter, onClear }) => {
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

// --------------------------------------------------------------------------

// COMPONENTE PRINCIPAL
export function ReportsTable({ data, ...rest }) {
  // DEFINIÇÕES DO REACT-DATA-TABLE
  const columns = [
    {
      id: 'ids',
      name: 'ID',
      selector: row => row.id,
      maxWidth: '100px',
      center: true,
    },
    {
      name: 'Nome',
      selector: row => row.nome,
      sortable: true,

      maxWidth: '400px',
    },
    {
      name: 'Idade',
      selector: row => row.idade,
      sortable: true,
      maxWidth: '150px',
    },
    {
      id: 'data_resposta',
      name: 'Data Resposta',
      selector: row => row.data_criacao,
      format: row => dataFormater(row.data_criacao),
      sortable: true,
      maxWidth: '200px',
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      id: 'table_action',
      name: 'Ação',
      maxWidth: '120px',
      cell: row => (
        <ButtonText title={'Ver'} onClick={() => handleReportOpen(row.id)} />
      ),
    },
  ];

  // FUNÇÃO DE PESQUISA POR NOME
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    data =>
      data.nome && data.nome.toLowerCase().includes(filterText.toLowerCase()),
  );

  // Função de limpar caixa de pesquisa
  const handleClear = () => {
    if (filterText) {
      setResetPaginationToggle(!resetPaginationToggle);
      setFilterText('');
    }
  };

  // FUNÇÃO DE ABRIR RELATÓRIO
  const navigate = useNavigate();
  const handleReportOpen = id => {
    navigate(`/detalhes/${id}`);
  };

  return (
    <div>
      <_filtercomponent
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
          persistTableHead
          // subHeader
          // subHeaderComponent={subHeaderComponentMemo}
          // selectableRows
          // paginationPerPage={5}
        />
      </Container>
    </div>
  );
}
