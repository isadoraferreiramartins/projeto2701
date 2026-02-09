import Exercicio1 from "./Exercicio1";

function Exercicio5() {
  function DestacarAtraso() {
    let caixa = document.getElementById("alerta-cobranca");
    caixa.style.color = "red";

    caixa.innerText = "Pagamento Atrasado!";
  }

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h2>Controle de Cobrança</h2>
      <p id="alerta-cobranca">Status: Normal</p>

      <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={DestacarAtraso}>Destacar Atraso</button>
    </div>
  );
}

export default Exercicio5;
