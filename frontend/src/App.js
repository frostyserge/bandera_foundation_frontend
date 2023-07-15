import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
// import Login from './components/Login';
// import Home from './components/Home';
import Navigation from './components/Navigation';
// import Logout from './components/Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <main>
          <Container>
            <h1>Bandera Foundation</h1>
          </Container>
        </main>
      {/* <Router> */}
        {/* <Navigation /> */}
        {/* <Routes> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} /> */}
        {/* </Routes>
      </Router> */}
      <Footer />
    </div>
  );
}

export default App;
