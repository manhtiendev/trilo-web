import PropTypes from 'prop-types';

const ButtonGoogle = ({ text = 'Sign up with google', onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className='flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border text-text2 gap-x-3 border-strock rounded-xl'
    >
      <img srcSet='./icon-google.png 2x' alt='icon-google' />
      <span>{text}</span>
    </button>
  );
};

ButtonGoogle.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonGoogle;
