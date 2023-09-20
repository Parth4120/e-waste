import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
<<<<<<< HEAD
    <div>
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
  <div>
  <Footer/>
  </div>
=======
    <div className="App">
      <h1>E-waste</h1>
>>>>>>> shabbir
    </div>
  );
}

export default App;
