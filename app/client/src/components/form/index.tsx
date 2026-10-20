import styled from "styled-components";

type InputFormProps = {
  placeholder?: string;
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
};

type ButtonFormProps = {
  label: string;
  onClick?: () => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-block-end: 20px;
  span {
    font-size: 0.9rem;
  }
`;

const InputForm = styled.input`
  width: 100%;
  padding: 10px;
  font-family: var(--default-font);
  font-size: 1rem;
  outline: none;
  border: solid 1px transparent;
  /* border-radius: 5px; */
  background: #2d2e35;
  &:focus {
    border: solid 1px var(--accent);
  }
`;

const ButtonForm = styled.button`
  width: 100%;
  padding: 10px;
  /* border-radius: 5px; */
  outline: none;
  border: solid 1px transparent;
  background: var(--accent);
  color: #000;
  font-family: var(--default-font);
  font-weight: 600;
  cursor: pointer;
`;

export const Input = ({
  placeholder,
  label,
  type,
  value,
  onChange,
}: InputFormProps) => {
  return (
    <Container>
      <span>{label}</span>
      <InputForm
        placeholder={placeholder}
        type={type}
        autoComplete="off"
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </Container>
  );
};

export const Button = ({ label, onClick }: ButtonFormProps) => {
  return <ButtonForm onClick={onClick}>{label}</ButtonForm>;
};
