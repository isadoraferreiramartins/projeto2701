function Exercicio9() {
  function verLocal() {
    let analise = {
      id: 1,
      propriedade: { nome: "Terra Boa", Cidade: "Muriae" },
    };
    let info = document.getElementById("info-local");
    info.innerText = `Local: ${analise.propriedade.nome}, ${analise.propriedade.Cidade}`;
  }
  return (
    <div>
      <div
        style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
      >
        <h2>Relatório</h2>
        <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={verLocal}>Ver Local</button>
        <div
          id="info-local"
          style={{ marginTop: "10px", fontWeight: "bold" }}
        ></div>
      </div>
    </div>
  );
}

export default Exercicio9;
