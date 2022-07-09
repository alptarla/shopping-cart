import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { yupResolver } from '@hookform/resolvers/yup';
import LoginFormSchema from './validations';
import CustomInput from '../../elements/CustomInput';

function LoginForm({ onSubmit, defaultValues }) {
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
              />
            )}
          />
        </Col>
        <Col lg={12}>
          <Stack className="align-items-end">
            <Button
              type="submit"
              variant="warning"
            >
              Login
            </Button>
          </Stack>
        </Col>
      </Row>
    </form>
  );
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.object,
};

export default LoginForm;
