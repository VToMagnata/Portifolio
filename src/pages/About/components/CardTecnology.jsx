function CardTecnology(props) {
  return (
    <div className="card">
      <section className="card__header">
        <h3 style={{ color: "#014486" }}>{props.name}</h3>
        <img src={props.icon} alt="Icon" className="card__header__icon" />
      </section>
      <div className="card__content">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default CardTecnology;
