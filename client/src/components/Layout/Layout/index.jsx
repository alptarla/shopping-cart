import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import Footer from '../Footer';
import Header from '../Header';

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <main className="h-100 py-5">
        <Container className="h-100">{children}</Container>
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
