import { Container } from './styles';

export function Button({ title, loading = false, ...rest }) {
  return (
    <Container
      type="button"
      disabled={loading} // Desabilita se a prop loading for true
      {...rest} // Usa o resto das propriedades, mesmo que não estejam explícitas (boa prática)
    >
      {loading ? 'Carregando...' : title}
    </Container> // Um IF condicional ali, SE loading? ENTÃO "Carregando" SE_NAO props.title
  );
}
