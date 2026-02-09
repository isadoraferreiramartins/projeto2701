function Exercicio4() {
  function mostrarInsumo() {
    // Simulação de Entrega API
    let insumo = {
      Nome: "Adubo Orgânico",
      Foto: "https://placecats.com/300/200",
      Estoque: "150 Sacos",
    };
    //buscar o elemento
    let titulo = document.getElementById("nome-insumo");
    let imagem = document.getElementById("foto-insumo");
    let estoque = document.getElementById("estoque-insumo");

    //Aplicar os dados JSON no elemento
    titulo.innerText = insumo.Nome;
    imagem.src = insumo.Foto;
    estoque.innerText = "Quantidade em Estoque: " + insumo.Estoque;
  }
  {
    return (
      <div
        style={{ padding: "10px", border: "1px solid #ccc", marginTop: "10px" }}
      >
        <h2>Resultado do Estoque</h2>
        <button style={{ padding: "10px 20px", backgroundColor: "#1bac27", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={mostrarInsumo}>Verificar Insumo</button>

        <h3 id="nome-insumo">Insumo Agrícola</h3>
        <img
          id="foto-insumo"
          alt=" AgrícolInsumoa"
          style={{ display: "block", marginBottom: "10px" }}
        />
        <p id="estoque-insumo">Quantidade em Estoque:...</p>
      </div>

    );
  }
}

export default Exercicio4;