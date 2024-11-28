# Documentação para a api
### Rotas protegidas retornam se não client não autenticado
   - 403 - response: "Acesso negado." (Sem token)
   - 401 - response: "Token inválido." (Token passado invalido)
### Rotas usam middleware de verificar o formarto no input
   - 400 - errors: Array de string contendo os erros

### GET -> /api 
- ping

### POST -> /api/login
- Input: Email e senha
- Devolve cookie autenticado 
- **Not Authorize** se credenciais invalidas

### POST -> /api/registro
- Input: Email, Senha e Nome
- Devolve cookie autenticado
- **Not Authorize** se credenciais já existem

### GET protegido -> /api/logout
- Limpar o cookie jwt do client

### Default (Nenhum das rotas)
- 404 - response: "Não encontrado"