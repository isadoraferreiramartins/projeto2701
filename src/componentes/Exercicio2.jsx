function Exercicio2() {
  function atualizarStatus() {
    let etiqueta = document.getElementsByClassName("status-pedido");
    etiqueta[0].innerHTML = "Pedido entregue";
    etiqueta[0].style.color = "pink";
  }

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h2>Controle de Pedidos</h2>
      <p className="status-pedido">Validando Pedido...</p>

      <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio2;
