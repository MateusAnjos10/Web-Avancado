import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Plans from './pages/plans';
import Details from './pages/details';
import Error from './pages/error';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li><Link className="nav-item nav-link" to='/'>Home</Link></li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about/mary">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/plans">Plans</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:name' element={<About />} />
        <Route path='/plans' element={<Plans />} />
        <Route path='/details/:filme' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes >
    </Router>
  );
}
