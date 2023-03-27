import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link" to="/filmes">Filmes</Link>
            <Link className="nav-item nav-link" to="/planos">Planos</Link>
            <Link className="nav-item nav-link" to="/contato">Contato</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
