# **BACKEND do 4 em linha**

## **:pushpin: SUMARIO:**

- [**BACKEND do 4 em linha**](#backend-do-4-em-linha)
  - [**:pushpin: SUMARIO:**](#pushpin-sumario)
  - [**:computer: Obter o projeto na sua máquina:**](#computer-obter-o-projeto-na-sua-máquina)
  - [**:flight\_departure: Rodar o projeto:**](#flight_departure-rodar-o-projeto)
  - [**:shinto\_shrine: Arquitetura:**](#shinto_shrine-arquitetura)

## **:computer: Obter o projeto na sua máquina:**

1. Faça o fork do repositório (github)
2. Faça um pull na sua máquina local (git -> linha de comando)
3. Configure suas variaveis de usuário localmente: nome de usuario e email (git)
4. Rode no terminal: npm install

## **:flight_departure: Rodar o projeto:**

1. Em ambiente de desenvolvimento:
   1. ```npm run dev```

## **:shinto_shrine: Arquitetura:**

```bash
├───config
├───controllers
├───middleware
├───models
```

- config:
  - onde você irá coloca seu arquivo [.env](https://www.alura.com.br/artigos/dotenv-gerenciando-variaveis-ambiente)
- controllers:
  - etapa inicial de um processo de requisição API
  - tratativa de chamada de requisição
- routes:
  - define uma rota e a redireciona para o processo correto (controller)
  - para saber qual rota chamar no front
- middleware:
  - onde se roda código antes da requisição ficar completa
- models?
  - onde ficam as consultas SQL, schemas e etc (mais relação ao banco de dados)

