function Exercicio6() {
  function saudarClinte() {
    let nomeDigitado = document.getElementById("nome-cliente").value;
    let mensagem = document.getElementById("mensagem-saudacao");
    mensagem.innerText = `Olá, ${nomeDigitado}!`;
  }
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>Saudação ao Cliente</h2>
      <input type="text" id="nome-cliente" placeholder="Digite seu nome" />
      <button onClick={saudarClinte}>Saudar Cliente</button>
      <p
        id="mensagem-saudacao"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></p>
    </div>
  );
}

export default Exercicio6;
