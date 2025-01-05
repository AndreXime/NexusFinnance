# Server
O servidor tem seguintes variaveis de ambiente:
- **NODE_ENV** - Falsy ativa o swagger e o production ativa CORS
- **URL_Client** - URL do Client para configurar o CORS que precisa ser production
- **PORT** - Porta que ira ocupar, deve-se mudar a porta exposta do docker também
- **databaseUrl** - URL para acessar o BD
- **SYNC** - Sicroniza as tabelas no BD, geralmente só precisa na primeira run do BD
- **JWT_KEY** - Chave secreta para assinar Cookies JWT

# Client
O cliente tem seguintes variaveis de ambiente:
- **NODE_ENV** - production ativa otimizações no Next.js
- **URL_Server** - Uma arg de build, a URL do Server é usada para conectar á API
- **PORT** - Porta que ira ocupar, deve-se mudar a porta exposta do docker também
