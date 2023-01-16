import { Container } from "./styles";

interface RadioProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

export function Radio({ active, label, onClick }: RadioProps) {
  return (
    <Container onClick={onClick} active={active}>
      <div className="radio"></div>
      <label>{label}</label>
    </Container>
  );
}
