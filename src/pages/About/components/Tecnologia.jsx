import CardTecnology from "./CardTecnology";

function Tecnologia() {
  return (
    <section className="container2">
      <h1>Tecnologias</h1>

      <div className="container__cards">
        <CardTecnology
          name="HTML"
          icon="https://cdn.simpleicons.org/html5/ff5722.svg"
          description="Linguagem usada para estruturar o conteúdo de páginas web."
        />
        <CardTecnology
          name="CSS"
          icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
          description="Linguagem de estilo que define aparência, cores e layout."
        />
        <CardTecnology
          name="JS"
          icon="https://cdn.simpleicons.org/javascript/f7df1e.svg"
          description="Linguagem que dá interatividade e dinamismo aos sites."
        />
        <CardTecnology
          name="React"
          icon="https://cdn.simpleicons.org/react/61dafb.svg"
          description="Biblioteca para criar interfaces de usuário reativas."
        />
      </div>

      <div className="container__cards2">
        <CardTecnology
          name="Sass"
          icon="https://cdn.simpleicons.org/sass/cc6699.svg"
          description="Extensão do CSS que adiciona variáveis e funções."
        />
        <CardTecnology
          name="Tailwind"
          icon="https://cdn.simpleicons.org/tailwindcss/06B6D4.svg"
          description="Framework para estilização rápida com classes no HTML."
        />
        <CardTecnology
          name="Bootstrap"
          icon="https://cdn.simpleicons.org/bootstrap/7952B3.svg"
          description="Framework CSS com componentes prontos e sistema de layout responsivo."
        />
      </div>
    </section>
  );
}

export default Tecnologia;
