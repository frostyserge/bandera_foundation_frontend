import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Login from './components/Login';
import Home from './pages/Home';
import Shop from './pages/Shop'
import Navigation from './components/Navigation';
// import Logout from './components/Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header />
        <main className="py-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merch" element={<Shop />} />
          </Routes>
        </main>
        {/* <Navigation />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} /> 
        </Routes> */}
        <Footer />
      </Router>
  );
}

export default App;