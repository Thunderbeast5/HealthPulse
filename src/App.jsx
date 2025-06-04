import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/landing';
import Doctor from './pages/get started/doctor';
// You can add more routes later like Login, Dashboard, etc.

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/doctor" element={<Doctor />} />
    </Routes>
  );
}

export default App;