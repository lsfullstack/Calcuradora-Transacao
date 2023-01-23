import { useEffect, useState } from "react";
import ContainerInput from "../../components/ContainerInput";
import ContainerResults from "../../components/ContainerResults";
import Input from "../../components/Input";
import MainContainer from "../../components/MainContainer";
import api from "../../services/api";
import Container from "./styles";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Homepage = () => {
  interface IResults {
    amount: number,
    installments: number,
    mdr: number,
  }

  const [ amount, setAmout ] = useState<number>(0);
  const [ installments, setInstallments ] = useState<number>(0);
  const [ mdr, setMdr ] = useState<number>(0);
  const [ days, setDays ] = useState<number[]>([0, 15, 30, 90]);
  const [ results, setResults ] = useState<IResults>({} as IResults);
  const [ loading, setLoading ] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const data = {
      amount: amount * 100,
      installments,
      mdr,
      days
    }

    api.post("?delay=1000", data)
      .then(res => res.data)
      .then((res) => setResults(res))
      .finally(() => setLoading(false));
  }, [amount, installments, mdr]);

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
            <span>Amanhã:
              <span>
                {
                  loading ? <AiOutlineLoading3Quarters/>
                  : 
                  <p>
                    {
                      Object.values(results)[0] ?
                        `R$ ${(Object.values(results)[0] / 100).toFixed(2)}`.replace(".", ",")
                        :
                        "R$ 0,00"
                    }
                  </p>
                }
              </span>
            </span>

            <span> Em 15 dias:
              <span>
                {
                  loading ? <AiOutlineLoading3Quarters/>
                  : 
                  <p>
                    {
                      Object.values(results)[1] ?
                      `R$ ${(Object.values(results)[1] / 100).toFixed(2)}`.replace(".", ",")
                        :
                        "R$ 0,00"
                    }
                  </p>
                }
              </span>
            </span>

            <span>Em 30 dias:
              <span>
                {
                  loading ? <AiOutlineLoading3Quarters/>
                  : 
                  <p>
                    {
                      Object.values(results)[2] ?
                      `R$ ${(Object.values(results)[2] / 100).toFixed(2)}`.replace(".", ",")
                        :
                        "R$ 0,00"
                    }
                  </p>
                }
              </span>
            </span>

            <span>Em 90 dias:
              <span>
                {
                  loading ? <AiOutlineLoading3Quarters/>
                  : 
                  <p>
                    {
                      Object.values(results)[3] ?
                      `R$ ${(Object.values(results)[3] / 100).toFixed(2)}`.replace(".", ",")
                        :
                        "R$ 0,00"
                    }
                  </p>
                }
              </span>
            </span>
          </div>
        </ContainerResults>
      </MainContainer>
    </Container>
  )
}

export default Homepage;
