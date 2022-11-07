import { Footer } from "./Footer";
import { Header } from "./Header";
import { CarrouselProductos } from "./Carrousel-Productos";

export function Producto() {
  return (
    <div style={{ backgroundColor: "#F0EBEF" }}>
      <section>
        <Header />
      </section>
      <section style={{ backgroundColor: "#F0EBEF" }}>
        <div
          className="container shadow shadow-lg my-4  rounded bg-white"
          style={{ width: "100%", height: "100%" }}
        >
          <div>
            <div className="container  d-flex ">
              <img
                src="./img-hangar/buzo.png"
                alt="Tienda Hangar producto"
                width="35%"
                style={{ marginLeft: "50px" }}
              />
              <div style={{ marginLeft: "200px", marginTop: "50px" }}>
                <h2>Buzo Calvin Klein</h2>
                <hr />
                <h2>$00000</h2>
                <br />
                <h5>
                  Talle Disponible: <h6>XS/M/S/XL/XXL</h6>
                </h5>
                <br />
                <p>Descripcion del producto</p>
                <button className="btn btn-primary"> Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CarrouselProductos />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}
