import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './config/Routes';
import ErrorBoundary from './config/ErrorBoundary';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <>
          <Header />
          <Routes>
            <Route path="*" element={<AppRoutes />} />
          </Routes>
          <Footer />
        </>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
