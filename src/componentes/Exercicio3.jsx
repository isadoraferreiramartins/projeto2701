function Exercicio3() {
  function processarDados() {
    // simulação de JSON
    let fatura = {
      cliente: "João Silva",
      valor: 250.75,
      vencimento: "2024-07-15",
    };

    let display = document.getElementById("detalhes-fatura");
    display.innerHTML =
      "cliente: " +
      fatura.cliente +
      "<br>" +
      "valor: R$" +
      fatura.valor +
      "<br>" +
      "vencimento: " +
      fatura.vencimento;
  }

  return (
    <div
      id="container-fatura"
      style={{ padding: "20px", border: "1px solid #ccc" }}
    >
      <h2>Processamento de Fatura</h2>
      <h3>Resultado Financeiro</h3>

      <div
        id="detalhes-fatura"
        style={{ margintop: "10px", fontWeight: "bold" }}
      >
        <button onClick={processarDados}>Processar Dados</button>
      </div>
    </div>
  );
}

export default Exercicio3;
