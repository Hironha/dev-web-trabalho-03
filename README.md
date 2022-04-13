## Desenvolvimento Web - Trabalho 03

### **Alunos**: Guilherme Muller, Luciano Folmer Gasparello e Rafael Hiro Kato Kawakami

O trabalho conta com 2 ramificações principais: editora-api, que é responsável pelo backend, e editora-gui, que fica responsável pelo frontend. O backend feito em NodeJS com auxílio da biblioteca Express e ORM Prisma, enquanto o frontend foi construído com React, Axios e BootStrap. Typescript é utilizado tanto na realização do backend quanto do front end.

Um artigo possui os atributos: **id**, que é um atributo identificador e único para cada artigo, **titulo**, **autor** e **resumo**, que são atributos String, e também o atributo **publicado**, que é boolean e indica se determinado artigo está publicado ou não. Também possui a variável **DataPublicação**, que irá mostrar a data em que foi criado o artigo.

O backend conta com um controller para poder fazer a manipulação dos artigos demonidado de **article**, para tal ele possui 3 funções principais:

O servidor atende na URL http://localhost:3000

- **CreateArticle**: http://localhost:3000/add cria um novo artigo dando o set nos atributos titulo, autor, resumo e publicado de acordo com as informações que o usuário preencher, enquanto atribui um ID automaticamente para o artigo. Essa função é acessada através de um botão na tela de criação de artigos;
- **FindAllArtigos**: http://localhost:3000/list lista todos os artigos ao colocá-los em um vetor do tipo lista e posteriormente em formato de uma tabela que mostra o id, título, autor, resumo, estado de publicação e data de criação do artigo. Essa função é acessada ao entrar na tela de listagem de artigos e não mostra artigos excluídos;
- **UpdateArticle**: http://localhost:3000/list permite a a exclusão de um artigo através de um soft delete, ou seja, os dados do artigo não são perdidos, ele é apenas marcado como excluído e não pode ser visualizado.

O frontend conta com 3 telas:

- **Home**: A página inicial do sistema, através dela é possível acessar as telas de listagem de artigos e de criação de novo artigo;
- **ListArticles**: Tela de listagem de artigos, irá mostrar os artigos não excluídos em forma de tabela, assim como seus atributos de id, título, autor, resumo, estado de publicação e data de criação do artigo. Também é possível clicar em um botão "Ações" na direita de cada artigo para poder excluir o artigo;
- **AddArticle**: Permite a criação de um novo artigo ao inserir os atributos de titulo, autor, resumo e publicado.




