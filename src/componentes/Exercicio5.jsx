import Exercicio1 from "./Exercicio1";

function Exercicio5() {
  function DestacarAtraso() {
    let caixa = document.getElementById("alerta-cobranca");
    caixa.style.color = "red";

    caixa.innerText = "Pagamento Atrasado!";
  }

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Controle de Cobrança</h2>
      <p id="alerta-cobranca">Status: Normal</p>

      <button onClick={DestacarAtraso}>Destacar Atraso</button>
    </div>
  );
}

export default Exercicio5;
