import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import HomePage from './pages/home';
import ServiceAreaPage from './pages/service-area';
import CityOptimizedPage from './pages/city-optimized';
import TotSnelPage from './pages/tot-snel';
import ContactWebhookTestPage from './pages/contact-webhook-test';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="werkgebied" element={<ServiceAreaPage />} />
        <Route path="werkgebied/:city" element={<CityOptimizedPage />} />
        <Route path="tot-snel" element={<TotSnelPage />} />
        <Route path="contact-webhook-test" element={<ContactWebhookTestPage />} />
      </Route>
    </Routes>
  );
}

export default App;