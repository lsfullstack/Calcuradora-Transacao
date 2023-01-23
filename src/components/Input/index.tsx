import Container from "./styles"

interface IInput {
  placeholder: string,
  label: string,
  legend?: string,
  onChange: any
}

const Input = ({ placeholder, label, legend, onChange }: IInput) => {
  return (
    <Container>
      <label htmlFor={`${placeholder}${label}`}>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        id={`${placeholder}${label}`}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      {
        legend && <span className="legend">{legend}</span>
      }
    </Container>
  );
}

export default Input;
