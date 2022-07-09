import classNames from 'classnames';
import PropTypes from 'prop-types';

function DividerTitle({ title, className }) {
  return (
    <h1
      className={classNames(
        'border-5 border-bottom border-warning pe-5 pb-1',
        className
      )}
      style={{ width: 'fit-content' }}
    >
      {title}
    </h1>
  );
}

DividerTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default DividerTitle;
