import { useState } from "react";
import ContainerInput from "../../components/ContainerInput";
import ContainerResults from "../../components/ContainerResults";
import Input from "../../components/Input";
import MainContainer from "../../components/MainContainer";
import Container from "./styles";

const Homepage = () => {
  const [ amount, setAmout ] = useState<number>(0);
  const [ installments, setInstallments ] = useState<number>(0);
  const [ mdr, setMdr ] = useState<number>(0);
  const [ days, setDays ] = useState<number[]>([0, 15, 30, 90]);

  return (
    <Container>
      <MainContainer>
        <ContainerInput>
          <p className="title-inputs">Simule sua antecipação</p>
          <Input
            placeholder="Digite aqui..."
            label="Informe o valor da venda *"
            onChange={setAmout}
          />

          <Input
            placeholder="Digite aqui..."
            label="Em quantas parcelas *"
            legend="Máximo de 12 parcelas"
            onChange={setInstallments}
          />

          <Input
            placeholder="Digite Aqui..."
            label="Informe o percentual de MDR *"
            onChange={setMdr}
          />
        </ContainerInput>
        <ContainerResults>
          <p className="title-results">VOCÊ RECEBERÁ:</p>
          <div className="results">
            <span>Amanhã: </span>

            <span>Em 15 dias: </span>

            <span>Em 30 dias: </span>

            <span>Em 90 dias: </span>
          </div>
        </ContainerResults>
      </MainContainer>
    </Container>
  )
}

export default Homepage;
