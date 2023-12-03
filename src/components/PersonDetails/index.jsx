import { Container } from './styles';

import { RiShutDownLine } from 'react-icons/ri';

export function PersonDetails({ name, idade, data_resposta }) {
  return (
    <Container>
      <div>
        <h2>Paciente</h2>
        <span>{name}</span>
      </div>
      <div>
        <h2>Idade</h2>
        <span>{idade}</span>
      </div>
      <div>
        <h2>Data resposta</h2>
        <span>{data_resposta}</span>
      </div>
    </Container>
  );
}
<RiShutDownLine />;
