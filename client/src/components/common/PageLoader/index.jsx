import { Spinner } from 'react-bootstrap';

function PageLoader() {
  return (
    <div className="w-100 h-100 d-flex align-items-center justify-content-center">
      <Spinner
        variant="warning"
        animation="border"
      />
    </div>
  );
}

export default PageLoader;
