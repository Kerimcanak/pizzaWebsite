import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPizzaITwo from './pages/OrderPizza';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/orderpizza" element={<OrderPizzaITwo />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
