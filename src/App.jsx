import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
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
                <li>Locations</li>
                <li>Events</li>
                <li>Factions</li>
              </ul>
            </nav>
          </aside>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<characters />} />
          </Routes>
        </div>

        <main className="lostpedia-content">
          <section>
            <h2>LOST</h2>
            <p>
              Lost is a Television show that began airing on September 22, 2024.
              Lost follows a group of survivors after crash landing on an Island.
              Throughout the show, the survivors will encounter mysterious people, creatures, and locations all over the Island.
            </p>
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