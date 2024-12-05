# Documentação da API 
### @Protegidas
   - 401: ```{ "message": "Não autenticado" }``` (Sem token ou token inválido)
   - 403: ```{ "message": "Acesso negado" }``` (Autenticado, mas sem permissão)

### @Input
   - 400: ``` { "message": "Erros de validação", "errors": ["O campo 'XXXX' é obrigatório", ...] } ```

### GET -> /api 
- Resposta: ```{ "message": "Pong" }```

### @Protegido GET -> /api/user
- Retorna o usuario do cookie
- Parametro opcional **?exist=true** somente confirma cookie é valido
- Aceita cookie ou header autorization
- Resposta:
   - 200: ```{ "message": User }```

### @Input POST -> /api/user/login
- Input:```{ email: "Email", senha: "Senha" }```
- Resposta:
   - 200:  ```{ "message": "Logado com sucesso" } + Cookie```
   - 401:  ```{ "message": "Credenciais inválidas" }```

### @Input POST -> /api/user/registro
- Input: ```{ email: "Email", senha: "Senha", nome: "Nome" }```
- Resposta:
   - 201: ```{ "message": "Logado com sucesso" } + Cookie```
   - 409: ```{ "message": "Usuário já existe" }```
   
### @Protegido GET -> /api/user/logout
- Resposta:
   - 200: ```{ "message": "Logout efetuado com sucesso" } + Cookie limpo```

### Default (Nenhum das rotas)
- 404: ```{  "message": "Não encontrado" }```