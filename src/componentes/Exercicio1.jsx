

function Exercicio1() {
  function atualizarStatus() {
    let etiqueta = document.getElementById("status-entrega");
    etiqueta.innerHTML = "Pedido entregue";
    etiqueta.style.color = "green";
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}>
      <h2>Controle de Entregas</h2>
      <p id="status-entrega">Aguardando Entrega...</p>

      <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={atualizarStatus}>Atualizar Status</button>
    </div>
  );
}

export default Exercicio1;
