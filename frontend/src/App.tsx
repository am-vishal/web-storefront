import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import VerifyTenant from './pages/VerifyTenant';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="verify" element={<VerifyTenant />} />
        {/* 404 Route - must be last */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
