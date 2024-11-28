# Documentação da API 
### @Rotas protegidas
   - 401: ```{  "message": "Não autenticado" }``` (Sem token ou token inválido)
   - 403: ```{  "message": "Acesso negado" }``` (Autenticado, mas sem permissão)

### @Rotas podem usar middleware de formarto no input
   - 400: ``` { "message": "Erros de validação", "errors": ["O campo 'XXXX' é obrigatório", ...] } ```

### GET -> /api 
- Descrição: Rota de ping para verificação do serviço.
- Resposta: ```{  "message": "Pong" }```

### POST -> /api/login
- Descrição: Login do cliente.
- Input:```{ email: "Email", senha: "Senha" }```
- Resposta:
   - 200:  ```{  "message": "Logado com sucesso" } + Cookie```
   - 401:  ```{  "message": "Credenciais inválidas" }```

### POST -> /api/registro
- Input: ```{ email: "Email", senha: "Senha", nome: "Nome" }```
- Resposta:
   - 201: ```{  "message": "Logado com sucesso"} + Cookie```
   - 409: ```{  "message": "Usuário já existe" }```
   
### GET protegido -> /api/logout
- Descrição: Encerra a sessão do cliente.
- Resposta:
   - 200: ```{  "message": "Logout efetuado com sucesso" + Cookie limpo}```

### Default (Nenhum das rotas)
- 404: ```{  "message": "Não encontrado" }```