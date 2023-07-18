import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MerchDetail from './pages/MerchDetail';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop">
                    <Route path="" element={<Shop />} />
                    <Route path=":productId" element={<MerchDetail />}>
                        <Route path="edit" element={<MerchEdit />} />
                        <Route path="delete" element={<MerchDelete />} />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
