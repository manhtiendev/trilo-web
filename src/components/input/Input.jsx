import PropTypes from 'prop-types';
import { useController } from 'react-hook-form';
import classNames from '~/utils/classNames';

const Input = ({
  control,
  name,
  type = 'text',
  error = '',
  placeholder = '',
  children,
  ...rest
}) => {
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className='relative'>
      <input
        id={name}
        type={type}
        className={classNames(
          'w-full bg-transparent px-6 py-4 text-sm font-medium border rounded-xl placeholder:text-text4 ',
          error.length > 0 ? 'border-error text-error' : 'border-strock text-text1',
          children ? 'pr-16' : ''
        )}
        placeholder={error.length > 0 ? '' : placeholder}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className='text-sm font-medium pointer-events-none -translate-y-2/4 top-2/4 left-6 text-error error-input'>
          {error}
        </span>
      )}
      {children && (
        <span
          className={`absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4 ${
            error.length > 0 ? 'top-7' : ''
          }`}
        >
          {children}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  control: PropTypes.any.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default Input;
