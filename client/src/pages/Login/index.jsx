import { Container } from 'react-bootstrap';
import DividerTitle from '../../components/common/DividerTitle';
import { LoginForm } from '../../components/forms';

const DEFAULT_VALUES = {
  email: '',
  password: '',
};

function Login() {
  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <Container className="w-50">
        <DividerTitle
          title="Login"
          className="mb-3"
        />
        <LoginForm
          onSubmit={handleSubmit}
          defaultValues={DEFAULT_VALUES}
        />
      </Container>
    </div>
  );
}

export default Login;
