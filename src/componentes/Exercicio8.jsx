function Exercicio8() {
  function MostrarPrimeiraEntrega() {
    let entregas = [
      "Fazenda Primaveira",
      "Fazenda Sol Nascente",
      "Fazenda Boa Vista",
    ];
    let campo = document.getElementById("primeira-entrega");
    campo.innerText = `Primeira entrega: ${entregas[0]}`;
  }
  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", marginTop: "10px" }}
    >
      <h2>Lista de Entregas</h2>
      <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={MostrarPrimeiraEntrega}>Mostrar Primeira Entrega</button>
      <div
        id="primeira-entrega"
        style={{ marginTop: "10px", fontWeight: "bold" }}
      ></div>
    </div>
  );
}

export default Exercicio8;
