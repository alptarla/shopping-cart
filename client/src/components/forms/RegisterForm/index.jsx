import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import RegisterFormSchema from './validations';
import CustomInput from '../../elements/CustomInput';
import { Link } from 'react-router-dom';

function RegisterForm({ onSubmit, defaultValues }) {
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ defaultValues, resolver: yupResolver(RegisterFormSchema) });

  const _handleSubmit = (values) => {
    onSubmit(values);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(_handleSubmit)}>
      <Row className="g-3">
        <Col lg={12}>
          <Row className="g-3">
            <Col lg={6}>
              <Controller
                control={control}
                name="firstName"
                key="firstName"
                render={({ field }) => (
                  <CustomInput
                    errorMessage={errors.firstName?.message}
                    type="text"
                    placeholder="First name"
                    label="First name"
                    {...field}
                    ref={null}
                  />
                )}
              />
            </Col>
            <Col lg={6}>
              <Controller
                control={control}
                name="lastName"
                key="lastName"
                render={({ field }) => (
                  <CustomInput
                    errorMessage={errors.lastName?.message}
                    type="text"
                    placeholder="Last name"
                    label="Last name"
                    {...field}
                    ref={null}
                  />
                )}
              />
            </Col>
          </Row>
        </Col>
        <Col lg={12}>
          <Row className="g-3">
            <Col lg={6}>
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
            <Col lg={6}>
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
          </Row>
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
              Register
            </Button>
            <span>
              <small className="me-1">Do you have an account?</small>
              <Link to="/login">
                <small>Login</small>
              </Link>
            </span>
          </Stack>
        </Col>
      </Row>
    </form>
  );
}

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};

export default RegisterForm;
