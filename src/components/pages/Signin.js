import React from 'react'

export default function Signin() {
  return (
    <div className='flex flex-col justify-start items-center w-full h-full relative'>

        {/* Images relative */}
        <img src="design1.png" alt="" className='absolute w-[12%] h-auto right-[10%] top-[12%]' />
        <img src="design2.png" alt="" className='absolute w-[14%] h-auto left-[4%] top-[23%]' />
        <img src="design3.png" alt="" className='absolute w-[14%] h-auto top-[96%]' />
        <img src="illustrationLefttwo.png" alt="" className='absolute w-[24%] h-auto left-0 bottom-0' />
        <img src="illustrationRighttwo.png" alt="" className='absolute w-[24%] h-auto right-0 bottom-0' />


        {/*Logo  and Icon*/}
        <div className=" flex justify-start items-center p-7">
            <img src="/Icon.png" alt="logo" className='px-1' />
            <div className="font-leadfont text-sm font-bold text-[15.95px]">Leadaio</div>
        </div>
        
        {/* House form */}
        <div className="rounded-[5px] w-[38%]" style={{background: 'rgba(255, 255, 255, 0.8)', boxShadow: '0px 19.645px 100px -24px rgba(0, 0, 0, 0.2)'}}>
          <form className="flex flex-col justify-center gap-[15px] p-8">

            <div className="flex flex-col items-center gap-[3px]">
            <div className="text-xs">Welcoeme BaCK</div>
            <div className="font-leadfont font-bold text-xl">Sign in to continue</div>
            </div>

            {/*Wrap  form other body in div*/}

            <div className="flex flex-col gap-[15px]">

            <div className="">
            <label htmlFor="" className='text-xs'>Email</label>
            <div className="bg-[#FFFFFF] border-[#DBDBDB] rounded-[2px] flex items-center w-full pr-2 pl-3">
                <input type="text" placeholder='Myemail.com' className='bg-transparent border-none outline-none p-1 h-[42px] w-[100%]' />
                <div className="">icon</div>
            </div>
            </div>


            <div className="">
            <label htmlFor="" className='text-xs'>Password</label>
            <div className="bg-[#FFFFFF] border-[#DBDBDB] rounded-[2px] flex items-center w-full pr-2 pl-3">
                <input type="text" placeholder='******' className='bg-transparent border-none outline-none p-1 h-[42px] w-[100%]' />
                <div className="">icon</div>
            </div>
            </div>

            </div>

            {/* end of wrap form other body in div*/}

            <div className="flex justify-between items-center font-leadfont mt-5">
                <div className="text-xs text-[#FA3F3F] font-bold">forget password</div>
                <div className="text-xs">Not a member? Sign Up!</div>
            </div>

            <div className="flex justify-center items-center ">
                <button className='border-none outline-none bg-leadgreen rounded-[5px] p-2 text-white w-full'>Create Account</button>
            </div>

            </form>
        </div>


    </div>
  )
}
