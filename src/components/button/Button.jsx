import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from '~/utils/classNames';

const Button = ({ type = 'button', children, className = '', isLoading = false, ...rest }) => {
  const child =
    isLoading === true ? (
      <div className='w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin'></div>
    ) : (
      children
    );
  let defaultClassName =
    'flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]';

  switch (rest.kind) {
    case 'primary':
      defaultClassName = defaultClassName + ' bg-primary bg-opacity-80 text-white';
      break;
    case 'secondary':
      defaultClassName = defaultClassName + ' bg-secondary text-white';
      break;
    case 'ghost':
      defaultClassName = defaultClassName + ' text-secondary bg-[#EEEAFD]';
      break;
    default:
      break;
  }

  if (rest.href)
    return (
      <Link to={rest.href} className={classNames(defaultClassName, className)}>
        {child}
      </Link>
    );

  return (
    <button
      className={classNames(
        defaultClassName,
        isLoading === true ? 'opacity-50 pointer-events-none' : '',
        className
      )}
      type={type}
      {...rest}
    >
      {child}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  href: PropTypes.string,
  kind: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
};

export default Button;
