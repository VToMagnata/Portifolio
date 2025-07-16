function Tecnologia() {
  return (
    <section className="container2">
      <h1>Tecnologias</h1>
      <div className="container__cards">
        <div className="card">
          <section className="card__header">
            <h3 style={{ color: "#014486" }}>HTML</h3>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="card__header__icon"
            />
          </section>
          <div className="card__content">
            <p>
              Estrutura básica e semântica de páginas web para organizar
              conteúdo.
            </p>
          </div>
        </div>
        <div className="card">
          <section className="card__header">
            <h3 style={{ color: "#014486" }}>CSS</h3>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="card__header__icon"
            />
          </section>
          <div className="card__content">
            <p>
              Estilização visual das páginas, controlando layout, cores e
              responsividade.
            </p>
          </div>
        </div>
        <div className="card">
          <section className="card__header">
            <h3 style={{ color: "#014486" }}>JS</h3>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JS"
              className="card__header__icon"
            />
          </section>
          <div className="card__content">
            <p>
              Linguagem de programação para tornar a web interativa e dinâmica.
            </p>
          </div>
        </div>
        <div className="card">
          <section className="card__header">
            <h3 style={{ color: "#014486" }}>React</h3>
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="REACT"
              className="card__header__icon"
            />
          </section>
          <div className="card__content">
            <p>
              Biblioteca JavaScript para criar interfaces de usuário
              reutilizáveis e reativas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tecnologia;
