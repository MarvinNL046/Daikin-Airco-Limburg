import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import HomePage from './pages/home';
import ServiceAreaPage from './pages/service-area';
import CityOptimizedPage from './pages/city-optimized';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="werkgebied" element={<ServiceAreaPage />} />
        <Route path="werkgebied/:city" element={<CityOptimizedPage />} />
      </Route>
    </Routes>
  );
}

export default App;