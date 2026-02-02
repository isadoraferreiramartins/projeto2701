function Exercicio1() {
  function atualizarStatus() {
    let etiqueta = document.getElementsByClassName("status-entrega");
    etiqueta[0].innerHTML = "Pedido entregue";
    etiqueta[0].style.color = "green";
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de Entregas</h2>
      <p className="status-entrega">Aguardando Entrega...</p>

      <button onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio1;
