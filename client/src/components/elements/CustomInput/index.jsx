import { Form } from 'react-bootstrap';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function CustomInput({ errorMessage, label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label htmlFor={rest.id}>{label}</Form.Label>}
      <Form.Control
        className={classNames({ 'border-danger': !!errorMessage })}
        {...rest}
      />
      {!!errorMessage && (
        <Form.Text className="text-danger">{errorMessage}</Form.Text>
      )}
    </Form.Group>
  );
}

CustomInput.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string,
};

export default CustomInput;
