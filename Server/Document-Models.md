### **Relacionamentos das Tabelas**

#### **1. Empresa -> BancoConta**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Uma empresa pode ter várias contas bancárias.  

---

#### **2. Usuario -> Beneficio (Tabela Intermediária: BeneficioUsuario)**  
- **Tipo:** `Muitos-para-Muitos`  
- **Descrição:** Um usuário pode ter vários benefícios, e um benefício pode ser atribuído a vários usuários.  

---

#### **3. Usuario -> Transacoes**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Um usuário pode realizar várias transações.  

---

#### **4. BancoConta -> Transacoes**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Uma conta bancária pode registrar várias transações.  

---

#### **5. Usuario -> Relatorio**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Um usuário pode criar vários relatórios.  

---

#### **6. Usuario -> Pagamento**  
- **Tipo:** `Um-para-Um`  
- **Descrição:** Um usuário pode ter apenas um pagamento associado.  

---

#### **7. Empresa -> Relatorio**  
- **Tipo:** `Um-para-Muitos`  
- **Descrição:** Uma empresa pode gerar vários relatórios.  
