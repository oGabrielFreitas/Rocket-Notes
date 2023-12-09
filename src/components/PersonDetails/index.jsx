import { Container } from './styles';
import { dataFormater } from '../../helpers/formatData';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

export function PersonDetails({ name, idade, email, data_resposta, ...rest }) {
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
      <div>
        <h2>Email</h2>
        <span>{email}</span>
      </div>
      <div>
        <Link to="/" style={{ alignSelf: 'end' }}>
          <Button title="Voltar" />
        </Link>
      </div>
    </Container>
  );
}
