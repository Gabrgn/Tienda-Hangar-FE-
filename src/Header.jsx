export function Header() {
  return (
    <section
      className=" text-light text-center"
      style={{ backgroundColor: "#F0EBEF" }}
    >
      <p
        style={{
          color: "#173863",
          fontFamily: "ITC Fenice Regular",
          fontSize: "50px",
          backgroundColor: "#F0EBEF",
          marginTop: "3px",
        }}
      >
        HANGAR
      </p>

      <div>
        <button
          className="btn outline-secondary  mx-1 my-2"
          style={{ color: "#173863" }}
        >
          <a href="/" style={{ textDecoration: "none", color: "#173863" }}>
            Home
          </a>
        </button>
        <button
          className="btn outline-secondary mx-1 my-2"
          style={{ color: "#173863" }}
        >
          <a
            href="/productos"
            style={{ textDecoration: "none", color: "#173863" }}
          >
            Camperas
          </a>
        </button>
        <button
          className="btn outline-secondary  mx-1 my-2"
          style={{ textDecoration: "none", color: "#173863" }}
        >
          Camisas
        </button>
        <button
          className="btn outline-secondary  mx-1 my-2"
          style={{ textDecoration: "none", color: "#173863" }}
        >
          Remeras
        </button>
        <button
          className="btn outline-secondary  mx-1 my-2"
          style={{ textDecoration: "none", color: "#173863" }}
        >
          Panatalones
        </button>
        <button
          className="btn outline-secondary  mx-1 my-2"
          style={{ textDecoration: "none", color: "#173863" }}
        >
          Bermudas
        </button>
      </div>
    </section>
  );
}
