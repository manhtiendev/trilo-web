import { Fragment } from 'react';

const HomePage = () => {
  return (
    <Fragment>
      <div className='flex items-start gap-[56px]'>
        <div className='w-[420px] rounded-md shadow '>
          <img
            src='https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt=''
            className='object-cover rounded-t-md h-[108px] mb-4 w-full'
          />
          <h1 className='w-full mb-4 text-base font-semibold text-center'>
            Stay on track and up to date
          </h1>
          <p className='mb-5 text-sm text-center'>
            Invite people to boards and cards, leave comments, add due dates, and we'll show the
            most important activity here.
          </p>
        </div>
        <div className='p-1'>
          <p className='px-2 mb-4 text-xs font-medium text-text3'>Links</p>
          <div className='flex items-start gap-x-2 p-2 hover:bg-slate-400 group rounded-md w-[342px] cursor-pointer'>
            <div className='flex items-center justify-center bg-gray-200 rounded-md group-hover:bg-gray-300 w-7 h-7'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-4 h-4 text-text3'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
              </svg>
            </div>
            <p className='text-sm translate-y-1 '>Create a board</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
