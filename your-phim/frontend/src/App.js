// Import CSS cho icon từ thư mục boxicons
import './assets/boxicons-2.0.7/css/boxicons.min.css';
// Import CSS chung của ứng dụng từ file App.scss
import './App.scss';

// Import các thành phần cần thiết từ thư viện React Router DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import các thành phần Header, Footer và AppRoutes từ các đường dẫn tương ứng
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './config/Routes';

// Import ErrorBoundary để bắt lỗi trong ứng dụng
import ErrorBoundary from './config/ErrorBoundary';

// Hàm chính của ứng dụng React
function App() {
  return (
    // Bọc toàn bộ ứng dụng trong BrowserRouter để sử dụng định tuyến (routing)
    <BrowserRouter>
      {/* Sử dụng ErrorBoundary để bắt và xử lý lỗi trong ứng dụng */}
      <ErrorBoundary>
        {/* Cấu trúc của ứng dụng */}
        <>
          {/* Hiển thị Header ở phía trên ứng dụng */}
          <Header />
          {/* Sử dụng Routes để xác định địa chỉ và hiển thị component tương ứng */}
          <Routes>
            {/* Route này sẽ hiển thị component AppRoutes cho mọi đường dẫn */}
            <Route path="*" element={<AppRoutes />} />
          </Routes>
          {/* Hiển thị Footer ở phía dưới ứng dụng */}
          <Footer />
        </>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

// Xuất (export) App để có thể sử dụng ở nơi khác trong ứng dụng
export default App;
