import { Route, Routes } from 'react-router-dom';
import { Home, Login, Product, Profile, Register } from '../pages';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/product/:id"
        element={<Product />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
    </Routes>
  );
}

export default Router;
