import PropTypes from 'prop-types';
import { Alert, Stack } from 'react-bootstrap';

function AlertMessage({ variant = 'warning', message }) {
  return (
    <Alert variant={variant}>
      <Stack
        direction="horizontal"
        gap={2}
      >
        {variant === 'danger' ? (
          <i className="bi bi-x-circle"></i>
        ) : variant === 'warning' ? (
          <i className="bi bi-exclamation-triangle" />
        ) : null}
        <span>{message}</span>
      </Stack>
    </Alert>
  );
}

AlertMessage.propTypes = {
  variant: PropTypes.oneOf(['warning', 'danger']),
  message: PropTypes.string.isRequired,
};

export default AlertMessage;
