function Info() {
  return (
    <div className="container">
      <h1>Sobre la aplicación</h1>

      <section className="info-box">
        <h2>¿Qué es esta app?</h2>
        <p>
          Esta aplicación consume una API pública para mostrar productos de una tienda virtual.
          Permite buscar, filtrar, guardar favoritos y visualizar detalles.
        </p>
      </section>

      <section className="info-box">
        <h2>Funcionalidades</h2>
        <ul>
          <li>Listado de productos</li>
          <li>Buscador dinámico</li>
          <li>Filtro por categorías</li>
          <li>Perfil de usuario</li>
          <li>Favoritos</li>
        </ul>
      </section>

      <section className="info-box">
        <h2>Tecnologías</h2>
        <p>React, JavaScript, CSS y consumo de API REST</p>
      </section>
    </div>
  );
}

export default Info;