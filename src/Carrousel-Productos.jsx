export function CarrouselProductos() {
  return (
    <div className=" container text-center" style={{ margin: "0 auto" }}>
      <h2 className="my-3">Lo mas destacado</h2>
      <div
        className="container shadow-lg p-3 mb-5 bg-body rounded mt-5 d-flex text-center"
        style={{ margin: "0 auto" }}
      >
        <div className="mx-5">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="./img-hangar/buzo2.jpg"
              alt="Card image cap"
              style={{ width: "50%", marginLeft: "25%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Nombre prenda</h5>
              <p className="card-text">Descripcion prenda</p>
              <p className="card-text">
                Precio: <p>$0000</p>
              </p>

              <button
                href="/producto"
                className="btn"
                style={{ backgroundColor: "#173863", color: "white" }}
              >
                <a
                  href="/producto"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Ver producto
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="./img-hangar/buzo2.jpg"
              alt="Card image cap"
              style={{ width: "50%", marginLeft: "25%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Nombre prenda</h5>
              <p className="card-text">Descripcion prenda</p>
              <p className="card-text">
                Precio: <p>$0000</p>
              </p>

              <button
                className="btn"
                style={{ backgroundColor: "#173863", color: "white" }}
              >
                <a
                  href="/producto"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Ver producto
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="mx-2">
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="./img-hangar/buzo2.jpg"
              alt="Card image cap"
              style={{ width: "50%", marginLeft: "25%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Nombre prenda</h5>
              <p className="card-text">Descripcion prenda</p>
              <p className="card-text">
                Precio: <p>$0000</p>
              </p>

              <button
                href="#"
                className="btn"
                style={{ backgroundColor: "#173863", color: "white" }}
              >
                <a
                  href="/producto"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Ver producto
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
