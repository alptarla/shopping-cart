import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ isNext = true, children, redirectPath = '/login' }) {
  if (isNext) return children;
  return <Navigate to={redirectPath} />;
}

PrivateRoute.propTypes = {
  isNext: PropTypes.bool,
  children: PropTypes.node.isRequired,
  redirectPath: PropTypes.string,
};

export default PrivateRoute;
