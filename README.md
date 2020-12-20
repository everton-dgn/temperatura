# PROJETO PREVISÃO DO TEMPO (React js)

## Apresentação

![Imagem do projeto](https://raw.githubusercontent.com/querocriarsite/temperatura/master/prints/1.png)

![Imagem do projeto](https://raw.githubusercontent.com/querocriarsite/temperatura/master/prints/2.png)

![Imagem do projeto](https://raw.githubusercontent.com/querocriarsite/temperatura/master/prints/3.png)

Este projeto tem como objetivo principal estudar React e suas tecnologias no
desenvolvimento de um sistema que se integra com uma api de dados climáticos.

## Tecnologias Usadas:

⚛ React js :

- context api,
- hooks,
- axios,
- styled-componets.

🔥 Integração com a API: https://hgbrasil.com/status/weather

✅ Lint — ESlint/Prettier/Editor Config

## Instruções

Todos comandos devem ser executados na pasta do projeto.

- Instalar dependências:

```
yarn
```

- Iniciar servidor e executar o aplicativo no modo de desenvolvimento.
- Abrir http://localhost:3000 para visualização no navegador.
- Uma página será recarregada se você fizer edições.:

```
yarn start
```

- Criar build de produção:

```
yarn build
```

- Um arquivo .env criado na raiz do projeto e preenchido com os dados de integração da API da Hgbrasil, ficando no seguinte formato:

```
REACT_APP_API_KEY = "75678345"
```

*obs: o valor "75678345" da chave da API mostrado acima é apenas um exemplo e não funcionará como chave de autenticação.

- Para o deploy da aplicação o caminho da pasta do projeto deverá ser inserido
  no arquivo package.json na linha "Homepage" no lugar da "/".

## Features

- [x] Projeto responsivo.

- [x] Integrado com api.

- [x] Mostra automaticamente a previsão do tempo para a cidade do visitante de
  acordo ip e geolocalização.

- [x] Permite consultar dados de climáticos buscando por cidade.

- [x] Mostra os seguintes dados: temperatura atual, temperatura máxima, velocidade do vento, umidade relatica do ar, previsões para uma semana e descrição com imagem do clima.

## Autoria

Éverton Toffanetto

https://querocriarsite.com
