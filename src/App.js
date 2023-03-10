import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/mywiki" exact element={<Home />} />
        <Route path="/mywiki/about" exact element={<About />} />
        <Route path="/mywiki/contact" exact element={<Contact />} />
        <Route path="/mywiki/account" exact element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;
