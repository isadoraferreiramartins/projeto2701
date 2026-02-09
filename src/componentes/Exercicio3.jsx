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
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h2>Processamento de Fatura</h2>
      <h3>Resultado Financeiro</h3>

      <div
        id="detalhes-fatura"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      >
        <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={processarDados}>Processar Dados</button>
      </div>
    </div>
  );
}

export default Exercicio3;
