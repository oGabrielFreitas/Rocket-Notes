import { Container } from './styles';

// export function PersonDetails({ name, idade, data_resposta, ...rest }) {
//   return (
//     <Container {...rest}>
//       <div>
//         <h2>Paciente</h2>
//         <span>{name}</span>
//       </div>
//       <div>
//         <h2>Idade</h2>
//         <span>{idade}</span>
//       </div>
//       <div>
//         <h2>Data resposta</h2>
//         <span>{data_resposta}</span>
//       </div>
//     </Container>
//   );
// }

function formatDate(dateString) {
  const date = new Date(dateString);

  const formattedTime = date.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  });

  return `${formattedDate} - ${formattedTime} `;
}

export function PersonDetails({ name, idade, data_resposta, ...rest }) {
  const formattedDate = formatDate(data_resposta);

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
