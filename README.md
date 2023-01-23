# calculadora-transacao

### Aplicação para calcular valor da antecipação de transações.

> Tecnologias usadas

* React JS;
* Styled-Components;
* TypeScript;
* React-Icons;
* Axios.

> Recursos

* API - https://frontend-challenge-7bu3nxh76a-uc.a.run.app
* Corpo da requisição POST (exemplo):
  * amount: Valor da Transação (em centavos);
  * installments: Número de parcelas (até 12);
  * mdr: Taxa cobrada sobre cada transação;
  * days: Lista de dias (opcional), sendo [ 0, 15, 30, 90 ] o padrão da requisição.

  ```json
    {
      "amount": 1000,
      "installments": 12,
      "msr": 0.5,
      "days": [0, 15, 30, 90]
    }
  ```

> Instalação de dependências

* Faça clone desse repositório na máquina;

* Na pasta do projeto, execute o comando:
  
```
  yarn install
```

ou

```
  npm install
```

> Executando projeto

* Execute o comando:
  
```
  yarn start
```

ou

```
  npm start
```

O projeto será executado localmente no link: http://localhost:3000
