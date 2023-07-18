import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './pages/Home';
import Shop from './pages/Shop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MerchDetail from './pages/MerchDetail';

function App() {
  return (
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:id" element={<MerchDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} /> 
          </Routes>
        {/* <Navigation />
        <Routes> 
          <Route path="/" element={<Home />} />
          
        </Routes> */}
        <Footer />
      </Router>
  );
}

export default App;
