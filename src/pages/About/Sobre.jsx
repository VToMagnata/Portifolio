import "../../css/App2.css";
import Tecnologia from "./components/Tecnologia";
import Sobremim from "./components/Sobremim";

function Sobre() {
  return (
    <section className="page2" id="page2">
      <Tecnologia />
      <Sobremim />
    </section>
  );
}

export default Sobre;
