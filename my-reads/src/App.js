import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import FindSomethingNew from './components/FindSomethingNew';
import './App.css';

// Placeholder components for other pages
function Home() {
  return <h2>Home Page</h2>;
}

function FindSomethingNew() {
  return <h2>Find Something New</h2>;
}

function ReviewBooks() {
  return <h2>Review Books</h2>;
}

function ToBeRead() {
  return <h2>To Be Read</h2>;
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>MyReads</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/find-something-new">Find Something New</Link></li>
              <li><Link to="/review">Review Books</Link></li>
              <li><Link to="/tbr">To Be Read</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/find-something-new" element={<FindSomethingNew />} />
            <Route path="/review" element={<ReviewBooks />} />
            <Route path="/tbr" element={<ToBeRead />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;