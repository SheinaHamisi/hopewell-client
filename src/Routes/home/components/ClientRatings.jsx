import React from 'react';

function ClientRatings({ratings}) {
  return <div className='bg-white border-2 p-6 rounded-md'>
      <img src={ratings} alt="ratings" />
  </div>;
}

export default ClientRatings;
