import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import ViewCart from './components/ViewCart';
import Home from './pages/Home';

const RoutesSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='cart-items' element={<ViewCart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default RoutesSetup;
