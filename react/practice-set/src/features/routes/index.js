import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
const RoutesDemo = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='blogs' element={<Blogs />}></Route>
          <Route path='contact' element={<ContactUs />}></Route>
          <Route path='*' element={<NoPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesDemo;
