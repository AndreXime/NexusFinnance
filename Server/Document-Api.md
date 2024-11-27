# Documentação para a api
## Rotas protegidas retornam se não client não autenticado
   - 403 - response: "Acesso negado." (Sem token)
   - 401 - response: "Token inválido." (Token passado invalido)
 
## GET -> /api 
- ping

## POST -> /api/login
- Busca no body do request email e senha
- Devolve cookie autenticado 
- **Bad request** se não foi passado credenciais
- **Not Authorize** se não tiver usuario com as credenciais 

## GET protegido -> /api/logout
- Limpar o cookie jwt do client

## Default (Nenhum das rotas)
- 404 - response: "Não encontrado"