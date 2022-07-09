import { useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import DividerTitle from '../../components/common/DividerTitle';
import { LoginForm } from '../../components/forms';
import Swal from 'sweetalert2';
import { TOKEN_STORAGE_KEY } from '../../constants';
import { useMutation, useQueryClient } from 'react-query';
import UserService from '../../services/UserService';

const DEFAULT_VALUES = {
  email: '',
  password: '',
};

const LOGIN_ERROR_MESSAGE = 'Please check your credentials.';

function Login() {
  const queryClient = useQueryClient();

  const { mutate: userLogin, isLoading } = useMutation(
    'userRegister',
    UserService.userLogin
  );

  const navigate = useNavigate();

  const handleSubmit = useCallback((values) => {
    userLogin(values, {
      async onSuccess(token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, token);

        queryClient.fetchQuery('currentUser');

        navigate('/');
      },
      onError() {
        Swal.fire('Error', LOGIN_ERROR_MESSAGE, 'error');
      },
    });
  }, []);

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
          isLoading={isLoading}
        />
      </Container>
    </div>
  );
}

export default Login;
