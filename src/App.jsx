import Exercicio1 from "./componentes/Exercicio1";
import Exercicio2 from "./componentes/Exercicio2";
import Exercicio3 from "./componentes/Exercicio3";
import Exercicio4 from "./componentes/Exercicio4";
import Exercicio5 from "./componentes/Exercicio5";
import Exercicio6 from "./componentes/Exercicio6";
import Exercicio7 from "./componentes/Exercicio7";
import Exercicio8 from "./componentes/Exercicio8";
import Exercicio9 from "./componentes/Exercicio9";
import Exercicio10 from "./componentes/Exercicio10";
import Exercicio11 from "./componentes/Exercicio11";
import ExercicioTitulo from "./componentes/ExercicioTitulo";
import Footer from "./componentes/Footer";


function App() {
  return (
    <div style={{ padding: "5px", backgroundColor: "#f0f0f0", minHeight: "100vh" ,fontFamily: "Arial, sans-serif" , color: "#333"}}>
      <div >
      <ExercicioTitulo />
      </div>
      
      <Exercicio1 />
      <Exercicio2 />
      <Exercicio3 />
      <Exercicio4 />
      <Exercicio5 />
      <Exercicio6 />
      <Exercicio7 />
      <Exercicio8 />
      <Exercicio9 />
      <Exercicio10 />
      <Exercicio11 />
      <Footer />
    </div>
  );
}

export default App;
