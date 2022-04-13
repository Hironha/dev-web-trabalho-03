## Desenvolvimento Web - Trabalho 03

### **Alunos**: Guilherme Muller, Luciano Folmer Gasparello e Rafael Hiro Kato Kawakami

O trabalho conta com 2 ramificações principais: editora-api, que é responsável pelo backend, e editora-gui, que fica responsável pelo frontend. O backend feito em NodeJS com auxílio da biblioteca Express e ORM Primsa, enquanto o frontend foi construído com React, Axios e BootStrap. Typescript é utilizado tanto na realização do backend quanto do front end.

Através dos controllers de editora e artigos, existem os seguintes métodos:

O servidor atende na URL <http://localhost:8080/api>

A classe **ArtigoController** tem como prinicpal função a edição dos objetos criados pela classe **EditorController** e possui os seguintes métodos:

- **createArtigo**: http://localhost:8080/api/artigos cria um novo artigo dando o set nos atributos titulo, resumo e publicado de acordo com as informações que o usuário preencher, enquanto atribui um ID automaticamente para o artigo. Essa função é acessada através de um botão na tela de criação de artigos;
- **getAllArtigos**: http://localhost:8080/api/artigos lista todos os artigos ao colocá-los em um vetor do tipo lista e posteriormente em formato de uma tabela que mostra o id, título, resumo e o estado de publicação do artigo;
- **getArtigoById**: http://localhost:8080/api/artigos/{id} lista um artigo atarvés de um determinado id;
- **updateArtigo**: http://localhost:8080/api/artigos/{id} através de um determinado id, atualiza os atributos de titulo, resumo e publicado;
- **deleteArtigo**: http://localhost:8080/api/artigos/{id} através de um determinado id, faz um hard delete do artigo com o id fornecido.
- **deleteAllArtigo**: http://localhost:8080/api/artigos faz um hard delete de todos os artigos cadastrados
- **getArtigoByPublicado**: <http://localhost:8080/api/artigos/{publicado} irá listar todos todos os artigos cujo atributo boolean publicado seja true.

A classe **EditoraController** tem como principal função a edição e criação de elementos através de um model de artigo e possui os seguintes métodos:

- **createForm**: <http://localhost:8080/api/editora/cria> um novo objeto artigo através do modelo “Artigo”
- **editForm**: http://localhost:8080/api/editora/salvar atualiza um artigo da lista de artigos.
- **showAll**: http://localhost:8080/api/editora/artigos retorna a lista de artigos com os artigos cadastrados.
- **showById**: http://localhost:8080/api/editora/artigos/{id} retorna a lista de artigos com o artigo com o id buscado.
- **deleteById**: http://localhost:8080/api/editora/artigos/excluir/{id} irá deletar um artigo da lista de artigos com o id informado.
- **deleteAll**: http://localhost:8080/api/editora/artigos/excluir-todos irá excluir todos os artigos da lista de artigos.


