import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Countdown from './component/Countdown/Countdown';
import PinCheck from './component/PinCheck/PinCheck';
import Home from './component/Home/home';
import Yes from './component/Yes/Yes';
import Gallery from './component/Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countdown />} />
        <Route path="/pincheck" element={<PinCheck />} />
        <Route path="/home" element={<Home />} />
        <Route path="/yes" element={<Yes />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 