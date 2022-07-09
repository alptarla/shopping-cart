import { Container } from 'react-bootstrap';
import DividerTitle from '../../components/common/DividerTitle';
import { RegisterForm } from '../../components/forms';

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

function Register() {
  const handleSubmit = (values) => {
    console.log('values', values);
  };

  return (
    <div className="h-100 d-flex align-items-center justify-content-center">
      <Container className="w-50">
        <DividerTitle
          title="Register"
          className="mb-3"
        />
        <RegisterForm
          onSubmit={handleSubmit}
          defaultValues={DEFAULT_VALUES}
        />
      </Container>
    </div>
  );
}

export default Register;
