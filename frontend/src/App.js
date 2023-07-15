import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Login from './components/Login';
// import Home from './components/Home';
import Navigation from './components/Navigation';
// import Logout from './components/Logout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
