# Sobre a aplicação

+ Essa aplicação foi desenvolvida através do enunciado:

+ ```https://github.com/dornellas13/serverless-challenge```

## Deploy e Disponibilidade

Essa aplicação está disponível na seguinte URL:

```https://002rstjmy0.execute-api.us-east-1.amazonaws.com/dev/```

Leia a seção **Rotas de utilização** para saber como usar a aplicação

## Instalação Local

- Para rodar em sua máquina, clone o repositório através do terminal:

```
https://github.com/GuiLopes29/serverless-challenge.git
```

- Entre na pasta onde o repositório foi clonado e instale as dependências:

#### Yarn
```
yarn
```
ou
```
yarn install
```

#### NPM
```
npm i
```
ou
```
npm install
```

- Para rodar a aplicação simplesmente execute no terminal, na pasta onde esta configurado o repositorio:

#### Yarn
```
yarn start
```
#### NPM
```
npm start
```

Atenção: a porta padrão utilizada é a 3003, logo a aplicação deve rodar em http://localhost:3003/

## Rotas de utilização

- Ressaltando a informação de que será necessario configurar a conexão no ```.env``` dentro da pasta ```serverless```, tendo um banco **MySql** com o nome: ```serverless``` e uma tabela ```users```
- Caso não queira utilizar um banco MySql local, utilize na rota: ```https://002rstjmy0.execute-api.us-east-1.amazonaws.com/dev/```
![getUsers](https://user-images.githubusercontent.com/33187657/147159294-62e0e481-ccbb-4445-b5e4-4b07ffad6505.png)

+ Para obter todos os usuarios cadastrados na aplicação execute a rota ```/```.

+ Para obter um usuario pelo Id: ```/:id```. Onde ```:id``` deverá ser o Id do usuario requerido.
![getUser](https://user-images.githubusercontent.com/33187657/147159308-ef19d696-46d5-455b-9d9d-ceec354a764f.png)

+ Para cadastrar um usuario deverá acessar a rota: ```/cadastrousuario```. Passando um JSON no formato:
```
{
	"Nome": "Nome",
	"Idade": 0,
	"Cargo": "Cargo"
}
```
![Cad Usuario](https://user-images.githubusercontent.com/33187657/147159235-1c8ea319-e802-4c6c-8f19-7aabad482ddc.png)

+ Para alterar um usuario acesse a rota: ```/alterausuario```. Passando um JSON no formato:
```
{
	"Id": 1,
	"Nome": "Nome",
	"Idade": 0,
	"Cargo": "Cargo"
}
```
![Alter User](https://user-images.githubusercontent.com/33187657/147159521-64ebca56-7136-4a3d-a0d7-e46b33e319a8.png)

+ Para deletar um usuario acesse a rota: ```/deleteusuario/:id```. Onde ```:id``` deverá ser o Id do usuario requerido.
![delete user](https://user-images.githubusercontent.com/33187657/147159637-e66faeef-2ea4-493c-9de4-44a7fdead00b.png)
+ Quando não existir aparecerá a mensagem:
![delete error](https://user-images.githubusercontent.com/33187657/147159669-1b9517c9-3dca-40d5-a72b-ba655169091c.png)


## Testes

+ Essa aplicação consta com testes para suas principais funções desenvolvidos com o JEST. Para rodas os testes, apenas rode o comando:
+ 
```
npm run test
```
ou
```
yarn test
```
e você terá o resultado dos testes automatizados das funções:
<br>
![Jest Test](https://user-images.githubusercontent.com/33187657/147159756-3f6804d3-5346-4e73-a6bc-75eeab44c521.png)
