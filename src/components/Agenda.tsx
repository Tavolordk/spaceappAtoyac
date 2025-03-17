const Agenda = () => {
    return (
      <section id="agenda" className="py-5">
        <div className="container">
          <h3 className="section-title text-center">Agenda</h3>
          <div className="row">
            <div className="col-md-4">
              <div className="agenda-item">
                <h4>Día 1 - Apertura</h4>
                <p>Presentación de proyectos, formación de equipos y taller de introducción.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="agenda-item">
                <h4>Día 2 - Desarrollo</h4>
                <p>Trabajo colaborativo, mentorías y avances de proyectos.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="agenda-item">
                <h4>Día 3 - Presentaciones</h4>
                <p>Demostraciones finales, premiación y cierre oficial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Agenda;  