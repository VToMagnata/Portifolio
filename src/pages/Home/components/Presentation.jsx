function Presentation() {
  return (
    <div className="presentation">
      <img src="/vitor.jpeg" alt="Eu" className="presentation__img" />
      <section style={{ width: "fit-content" }}>
        <h2 className="presentation__name">
          Vitor{" "}
          <span
            style={{
              color: "#ff0000",
              textShadow: "0 0 2px #ff0000, 0 0 4px #ff0000, 0 0 8px #ff0000",
            }}
          >
            Losina.
          </span>
        </h2>
        <p>web developer</p>
      </section>
    </div>
  );
}

export default Presentation;
