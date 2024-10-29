import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import locations from './other-pages/locations';
import characters from './other-pages/characters';

const App = () => {
  return (
    <Router>
      <>
        <div className="main-container"></div>
        <div className="lostpedia-home">
          <header className="lostpedia-header">
            <h1>LOST</h1>
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          </header>
        </div>

        <div className="lostpedia-body">
          <aside className="lostpedia-sidebar">
            <h3>Contents</h3>
            <nav>
              <ul>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/locations">Locations</Link></li>
                <li>Events</li>
                <li>Factions</li>
              </ul>
            </nav>
          </aside>
        </div>

        <main className="lostpedia-content">
          <section>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<characters />} />
          </Routes>
          </section>
        </main>
      </>
    </Router>
  );
};

const Home = () => {
  return (
    <div>
      <h2>Welcome to LOSTpedia</h2>
      <p>This is the home page of the LOST wikipedia.</p>
    </div>
  );
};

export default App;