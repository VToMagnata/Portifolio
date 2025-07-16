import "../../css/App3.css";
import Card from "./components/Card";

function Projects() {
  return (
    <section className="page3" id="page3">
      <div>
        <h1>Projetos</h1>
        <div className="projeto__container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Projects;
