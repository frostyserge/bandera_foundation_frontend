// import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Footer from './components/Footer';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Home from './pages/Home';
import Shop from './pages/Shop';
import MerchEdit from './pages/MerchDetail';
import MerchDelete from './components/MerchDelete';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MerchDetail from './pages/MerchDetail';
import { useState } from 'react';
import MerchCreate from './components/MerchCreate';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/" element={<Home />} />
                <Route path="/shop">
                    <Route path="" element={<Shop />} />
                    <Route path="new" element={<MerchCreate />} />
                    <Route path=":productId" element={<MerchDetail />}>
                        <Route path="edit" element={<MerchEdit />} />
                        <Route path="delete" element={<MerchDelete />} />
                    </Route>
                </Route>
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
