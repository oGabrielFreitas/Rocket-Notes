import { Container } from './styles';

export function Section({ title, children, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      <div className="title-section-title">
        {Icon && <Icon size={16} />}
        <h2>{title}</h2>
      </div>
      {children}
    </Container>
  );
}
