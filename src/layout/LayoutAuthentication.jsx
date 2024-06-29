import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const LayoutAuthentication = ({ heading = '', children }) => {
  return (
    <div className='relative w-full min-h-screen px-20 py-10 bg-[#1565c0] isolate'>
      <img
        src='/ellipse.png'
        alt='bg'
        className='hidden lg:block pointer-events-none absolute bottom-0 left-0 right-0 z-[-1] w-full'
      />
      <Link to='/login' className='inline-block mb-5 lg:mb-16'>
        <img className='w-[52px] h-[52px]' src='/trilo.svg' alt='trilo-app' />
      </Link>
      <div className='w-full max-w-[556px] bg-white rounded-xl px-5 py-8 lg:px-16 lg:py-12 mx-auto'>
        <h1 className='mb-1 text-lg font-semibold text-center text-text1 lg:text-xl lg:mb-3'>
          {heading}
        </h1>
        {children}
      </div>
    </div>
  );
};

LayoutAuthentication.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.node,
};

export default LayoutAuthentication;
