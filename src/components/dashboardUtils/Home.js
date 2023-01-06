import React, {useState} from 'react';
import Bottom from './homecomponents/Bottom';
import Top from './homecomponents/Top';

export default function Home() {

  return (
    <div className='flex flex-col gap-["10px"] justify-center items-center'>
        {/* data values */}
        <Top />

         {/* Image */}
        <img src="/Banner.png" alt="" className='w-[86%] h-auto' />

        {/* Leads and campaigns */}
        <Bottom />
    </div>
  )
}
