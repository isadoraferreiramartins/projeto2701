function Exercicio2() {
  function atualizarStatus() {
    let etiqueta = document.getElementsByClassName("status-pedido");
    etiqueta[0].innerHTML = "Pedido entregue";
    etiqueta[0].style.color = "pink";
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de Pedidos</h2>
      <p className="status-pedido">Validando Pedido...</p>

      <button onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio2;
