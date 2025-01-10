import { useState } from "react";

const Relatorio: React.FC = () => {
  const [filtros, setFiltros] = useState({
    tipoRelatorio: "",
    periodo: "",
    departamento: "",
    tipoArquivo: ""
  });

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleGerar = () => {
    console.log("Gerando relatório com os filtros:", filtros);
    alert("Relatório gerado com sucesso! (Simulação)");
  };

  return (
    <div className="p-6 bg-base-200 shadow-lg rounded-lg max-w-md mx-auto my-5">
      <h1 className="text-center text-2xl font-bold mb-4 hidden lg:block">Gerar relatorio</h1>
      <form className="flex flex-col gap-4">
        {/* Tipo de Relatório */}
        <div>
          <label className="label">
            <span className="label-text">Tipo de Relatório</span>
          </label>
          <select
            name="tipoRelatorio"
            className="select select-bordered w-full"
            value={filtros.tipoRelatorio}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="financeiro">Financeiro</option>
            <option value="folha">Folha de Pagamento</option>
          </select>
        </div>

        {/* Período */}
        <div>
          <label className="label">
            <span className="label-text">Período inicial</span>
          </label>
          <input
            type="date"
            name="periodo"
            className="input input-bordered w-full"
            value={filtros.periodo}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Período final</span>
          </label>
          <input
            type="date"
            name="periodo"
            className="input input-bordered w-full"
            value={filtros.periodo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text">Tipo do Arquivo</span>
          </label>
          <select
            name="tipoArquivo"
            className="select select-bordered w-full"
            value={filtros.tipoArquivo}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="PDF">PDF</option>
            <option value="CSV">CSV</option>
          </select>
        </div>

        {/* Botão de Gerar Relatório */}
        <button type="button" className="btn btn-primary w-full mt-2" onClick={handleGerar}>
          Gerar Relatório
        </button>
      </form>
    </div>
  );
};

export default Relatorio;
