<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ title, description, link }) => {
  return (
    <div className='w-full sm:w-[48%] md:w-[32%] max-w-[300px] bg-light_crimson flex flex-col gap-2 p-4 rounded-lg justify-center'>
      <p className='title font-flv text-xl lg:text-2xl text-black'>{title}</p>
      <p className='desc text-dark_gray text-base'>{description}</p>
      {/* <Link to={link} className='text-sm font-[500] text-crimson'>
        Read More
      </Link> */}
    </div>
  );
};

export default Event;
=======
import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({title, description, link}) => {
  return (
    <div className='w-[32%] max-w-[300px] h-[200px] bg-light_crimson flex flex-col gap-2 p-4 rounded justify-center rounded-lg'>
        <p className='title font-flv text-2xl text-black'>{title}</p>
        <p className='desc text-dark_gray text-base'>{description}</p>
        <Link to={link} className='text-sm font-[500] text-crimson'>Read More</Link>
    </div>
  )
}

export default Event
>>>>>>> 5da88815be93b2c904609f744b075dbcf9c2fb55
