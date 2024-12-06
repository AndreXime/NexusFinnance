## Atributos dos models

| Entidade        | Atributos                                           |
|-----------------|-----------------------------------------------------|
| **Empresa**     | ID, nome, CNPJ, endereco |
| **Contador**    | ID, nome, email, senha, IDEmpresa |
| **Funcionario** | ID, nome, email, cargo, dataEntrada, IDEmpresa |
| **Pagamento**   | ID, salarioBruto, deducoes, salarioLiquido, dataPagamento, IDFuncionario |
| **Benefício**   | ID, nome, tipo, custo |
| **Banco**       | ID, nome, agencia, saldo, IDEmpresa |
| **Transação**   | ID, tipo, valor, data, categoria, IDBanco |
| **BeneficioPagamento** | IDBeneficio, IDPagamento |


## **Relacionamentos das Tabelas**

### **1. Empresa -> Contador**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Uma empresa pode ter vários contadores associados a ela, mas cada contador está associado a apenas uma empresa.  

---

### **2. Empresa -> Funcionario**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Uma empresa pode ter vários funcionários, mas cada funcionário está associado a apenas uma empresa.

---

### **3. Empresa -> Banco**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Uma empresa pode ter várias contas bancárias, mas cada banco está associado a uma única empresa.

---

### **4. Pagamento -> Beneficio (Tabela Intermediária: BeneficioPagamento)**  
- **Tipo:** `Muitos-para-Muitos`  
- **Descrição:** Um benefício pode ser associado a vários pagamentos, e cada pagamento pode ter vários benefícios associados

---

### **5. Banco -> Transacoes**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Cada banco pode registrar várias transações, mas cada transação ocorre em um único banco. 

---

### **6. Funcionario -> Pagamento**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Cada funcionário pode ter vários pagamentos, mas cada pagamento é feito a um único funcionário.  

---