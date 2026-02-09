function Exercicio10() {
  function verificarEstoque() {
    let item = {
      nome: "Produto A",
      quantidade: 5,
    };
    let caixa = document.getElementById("estoque-status");
    if (item.quantidade > 0) {
      caixa.innerText = `Estoque disponível: ${item.quantidade} unidades.`;
      caixa.style.color = "green";
    } else {
      caixa.innerText = "Produto esgotado!";
      caixa.style.color = "red";
    }
  }
  return (
    <div>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          marginTop: "10px",
        }}
      >
        <h2>Relatório</h2>
        <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={verificarEstoque}>Verificar Estoque</button>
        <div
          id="estoque-status"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        ></div>
      </div>
    </div>
  );
}

export default Exercicio10;
