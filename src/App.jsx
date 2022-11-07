import { Footer } from "./Footer";
import { Header } from "./Header";
import { CarrouselProductos } from "./Carrousel-Productos";
import { Destacados } from "./Destacados";

export function App() {
  return (
    <div className="App " style={{ backgroundColor: "#F0EBEF" }}>
      <section>
        <Header />
      </section>
      <section>
        <section className="Carrousel">
          <div
            id="carouselExampleControls"
            className="carousel slide "
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="./img-hangar/img-cuatro.webp"
                  className="d-block w-100 h-20"
                  height="420"
                />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img
                  src="./img-hangar/img-dos.png"
                  className="d-block w-100 h-20"
                  height="420"
                />
              </div>
              <div className="carousel-item">
                <center></center>
                <img
                  src="./img-hangar/img-tres.webp"
                  className="d-block w-100 h-20"
                  height="420"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <div className="container">
          <CarrouselProductos />
        </div>
      </section>

      <section>
        <Destacados />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
