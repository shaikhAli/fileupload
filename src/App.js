import './App.css';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import { Route, Routes, BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
