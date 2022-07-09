import { Container } from 'react-bootstrap';
import DividerTitle from '../../components/common/DividerTitle';
import { RegisterForm } from '../../components/forms';
import { useMutation } from 'react-query';
import UserService from '../../services/UserService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { TOKEN_STORAGE_KEY } from '../../constants';
import { useCallback } from 'react';

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const REGISTER_ERROR_MESSAGE =
  'An error occurred while registering user information!';

function Register() {
  const { mutate: userRegister, isLoading } = useMutation(
    'userRegister',
    UserService.userRegister
  );

  const navigate = useNavigate();

  const handleSubmit = useCallback((values) => {
    userRegister(values, {
      onSuccess(token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);
        navigate('/');
      },
      onError() {
        Swal.fire('Error', REGISTER_ERROR_MESSAGE, 'error');
      },
    });
  }, []);

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
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
}

export default Register;
