export function Footer() {
  return (
    <div className="bg-dark">
      <div className="d-flex">
        <div className="col-12 col-lg-6 col-md-4 mx-3">
          <img
            src="./img-hangar/hangar-tittle-dos.png"
            width="35%"
            className="mt-4 mx-3"
          />
          <li
            className="text-light my-3"
            style={{ textDecoration: "none", listStyle: "none" }}
          >
            <ul>Contacto</ul>
            <ul>Mas Info</ul>
            <ul>Quienes somos</ul>
          </li>
        </div>
        <div className="col-12 col-lg-6 col-md-4">
          <h4
            className="text-light mt-3"
            style={{ fontFamily: "ITC Fenice Regular" }}
          >
            Seguinos en nuestras redes
          </h4>
          <li
            className="text-light my-3"
            style={{ textDecoration: "none", listStyle: "none" }}
          >
            <ul>
              <a
                href="https://www.facebook.com/"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                Facebook
              </a>
            </ul>
            <ul>
              <a
                href="https://www.instagram.com/?hl=es-la"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                Instagram
              </a>
            </ul>
            <ul>
              <a
                href="https://web.whatsapp.com/"
                style={{ textDecoration: "none", color: "white" }}
                target="_blank"
              >
                Whatsapp
              </a>
            </ul>
          </li>
        </div>
      </div>
      <div className="bg-dark text-center text-light mb-4 ">
        <p>Derechos Reservados: Tienda Hangar / Belén - Catamarca</p>
        <p>WebSite created by: Gabriel Barragán Cativa - 2022</p>
      </div>
      <p>.............</p>
    </div>
  );
}
