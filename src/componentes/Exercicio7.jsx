function Exercicio7() {
  function CalcularTotal() {
    let produtos = [{ nome: "Produto A", preco: 100.5, imposto: 15 }];
    let resutado = document.getElementById("total-produtos");
    let total = produtos.preco + produtos.imposto;
    resutado.innerText = `Total: R$ ${total.toFixed(2)}`;
  }
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h2>Cálculadora de Total de Produtos</h2>
      <button onClick={CalcularTotal}>Calcular Total</button>
      <div
        id="total-produtos"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio7;
