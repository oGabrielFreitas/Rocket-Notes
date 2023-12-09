import { Container } from './styles';
import { dataFormater } from '../../helpers/formatData';

export function PersonDetails({ name, idade, data_resposta, ...rest }) {
  const formattedDate = dataFormater(data_resposta);

  return (
    <Container {...rest}>
      <div>
        <h2>Nome</h2>
        <span>{name}</span>
      </div>
      <div>
        <h2>Idade</h2>
        <span>{idade}</span>
      </div>
      <div>
        <h2>Data da resposta</h2>
        <span>{formattedDate}</span>
      </div>
    </Container>
  );
}
