function Header() {
  return (
    <header className="navBar">
      <section className="navBar__logo">
        <h2>
          VT{" "}
          <span
            style={{
              color: "#ff0000",
              textShadow: "0 0 2px #ff0000, 0 0 4px #ff0000, 0 0 8px #ff0000",
            }}
          >
            /DEV
          </span>
        </h2>
      </section>
      <nav className="navBar__links">
        <a href="home" className="navBar__links__btn">
          Home
        </a>
        <a href="#page2" className="navBar__links__btn">
          Sobre
        </a>
        <a href="#page3" className="navBar__links__btn">
          Projetos
        </a>
      </nav>
    </header>
  );
}

export default Header;
