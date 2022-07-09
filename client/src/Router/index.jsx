import { Route, Routes } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Home, Login, Product, Profile, Register } from '../pages';
import PrivateRoute from './PrivateRoute';

function Router() {
  const { data: user } = useUser();

  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute
            isNext={!!user}
            redirectPath="/login"
          >
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/product/:id"
        element={<Product />}
      />
      <Route
        path="/login"
        element={
          <PrivateRoute
            isNext={!user}
            redirectPath="/"
          >
            <Login />
          </PrivateRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PrivateRoute
            isNext={!user}
            redirectPath="/"
          >
            <Register />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default Router;
