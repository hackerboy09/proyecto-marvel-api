
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to= '/'>
          <img src= './marvel-logo.png' width= '200' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to= '/' >Inicio</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to= '/personajes' >Personajes</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to= '/comics' >Comics</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to= '/series' >Series</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar