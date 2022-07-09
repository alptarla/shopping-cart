import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { Button, Col, Row, Spinner, Stack } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginFormSchema from './validations';
import CustomInput from '../../elements/CustomInput';
import { Link } from 'react-router-dom';

function LoginForm({ onSubmit, defaultValues, isLoading = false }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(LoginFormSchema) });

  const _handleSubmit = (values) => {
    onSubmit(values);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(_handleSubmit)}>
      <Row className="g-2">
        <Col lg={12}>
          <Controller
            control={control}
            name="email"
            key="email"
            render={({ field }) => (
              <CustomInput
                errorMessage={errors.email?.message}
                type="email"
                placeholder="Email"
                label="Email"
                {...field}
                ref={null}
              />
            )}
          />
        </Col>
        <Col lg={12}>
          <Controller
            control={control}
            name="password"
            key="password"
            render={({ field }) => (
              <CustomInput
                errorMessage={errors.password?.message}
                type="password"
                placeholder="Password"
                label="Password"
                {...field}
                ref={null}
              />
            )}
          />
        </Col>
        <Col lg={12}>
          <Stack
            className="align-items-end"
            gap="2"
          >
            <Button
              type="submit"
              variant="warning"
            >
              {isLoading && (
                <Spinner
                  size="sm"
                  className="me-2"
                  animation="border"
                />
              )}
              <span>Login</span>
            </Button>
            <span>
              <small className="me-1">{`Don't you have an account?`}</small>
              <Link to="/register">
                <small>Register</small>
              </Link>
            </span>
          </Stack>
        </Col>
      </Row>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default LoginForm;
