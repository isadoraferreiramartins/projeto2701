function Exercicio11() {
  function realizarContacao() {
    // 1. Pega um valor digitado
    let valorDigitado = document.getElementById("imput-preco").value;
    // 2. Simula um objeto de resposta
    let contato = {
      fornecedor: "Agrotop Distribuidora",
      valorSugerido: valorDigitado,
      status: "Contação em análise",
    };
    // 3. Exibe nos campos correspondentes
    document.getElementById("res-fornecedor").innerText =
      "fornecedor: " + contato.fornecedor;
    document.getElementById("res-valor").innerText =
      "Preço cotado: R$ " + contato.valorSugerido;
    document.getElementById("res-status").innerText =
      "Status: " + contato.status;
  }
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        marginTop: "10px",
      }}
    >
      <h2>Contação e Compras</h2>
      <input
        id="imput-preco"
        type="number"
        placeholder="Digite o valor da contação"
      />
      <button 
        style={{ marginLeft: "10px", padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
        onClick={realizarContacao}
      >
        Realizar Contação
      </button>
      <div style={{ fontWeight: "bold", color: "black" }}>
        <p id="res-fornecedor"></p>
        <p id="res-valor"></p>
        <p id="res-status"></p>
      </div>
    </div>
  );
}

export default Exercicio11;
