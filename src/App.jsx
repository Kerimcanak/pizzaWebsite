import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import OrderPizzaITwo from './pages/OrderPizza';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/orderpizza" element={<OrderPizzaITwo />} />
    </Routes>
  );
}

export default App;
