import React from 'react';
//import logo from '../../../public/Icon.png';

export default function Signup() {
  return (
    <div>
        <div className=" flex justify-start items-center p-7">
            <img src="/Icon.png" alt="logo" className='px-1' />
            <div className="font-leadfont text-sm font-bold text-[15.95px]">Leadaio</div>
        </div>


        {/* Contain body */}
        <div className="flex justify-center items-center gap-[150px]">
          {/* first section */}
          <div className="">
             <img src="/signupillustration.png" className='h-[422px]' alt="illustration" />
          </div>


           {/* second section */}
           <div className="bg-[#FFFFFF] flex justify-center items-center rounded-[5px]">
             <form className="flex flex-col justify-center gap-[45px] p-8">

               <div className="flex justify-start items-center gap-[30px]">
                  <img src="/formimage.png" alt="formImage" className='w-[15%] h-[auto]' />
                  <div className="font-leadfont font-bold text-xl">Create Your Account</div>
               </div>

              {/*Wrap  form other body in div*/}

              <div className="flex flex-col gap-[25px]">

               <div className="flex justify-center gap-[13px]">
                  
                  <div>
                    <label htmlFor="" className='text-xs'>First Name</label>
                    <div className="bg-[#DBDBDB] border-[#DBDBDB] rounded-[2px] flex items-center w-[170px] pr-1 pl-3">
                        <input type="text" className='border-none outline-none bg-transparent p-1 h-[42px] w-[72%]' placeholder='Name' />
                        <div className="">icon</div>
                    </div>
                  </div>



                  <div>
                    <label htmlFor="" className='text-xs'>Last Name</label>
                    <div className="bg-[#DBDBDB] border-[#DBDBDB] rounded-[2px] flex items-center w-[170px] pr-1 pl-3">
                        <input type="text"  placeholder='last Name' className='bg-transparent border-none outline-none p-1 h-[42px] w-[72%]'/>
                      <div className="">icon</div>
                    </div>
                  </div>

               </div>


               <div className="">
                  <label htmlFor="" className='text-xs'>Email</label>
                  <div className="bg-[#DBDBDB] border-[#DBDBDB] rounded-[2px] flex items-center w-full pr-2 pl-3">
                    <input type="text" placeholder='Myemail.com' className='bg-transparent border-none outline-none p-1 h-[42px] w-[100%]' />
                    <div className="">icon</div>
                  </div>
               </div>


               <div className="">
                  <label htmlFor="" className='text-xs'>Password</label>
                  <div className="bg-[#DBDBDB] border-[#DBDBDB] rounded-[2px] flex items-center w-full pr-2 pl-3">
                    <input type="text" placeholder='******' className='bg-transparent border-none outline-none p-1 h-[42px] w-[100%]' />
                    <div className="">icon</div>
                  </div>
               </div>

               </div>

             {/* end of wrap form other body in div*/}

              <div className="flex justify-between items-center">
                 <button className='border-none outline-none bg-leadgreen rounded-[3px] p-2 text-white w-[172px]'>Create Account</button>
                 <div className="text-xs">Already a member? Login</div>
               </div>

             </form>
              
           </div>
        </div>
         {/*End of contain body */}


         <div className="flex justify-center items-center align-center w-full bg-leadyellow mt-[56px] h-[83px]">
           <div className="flex justify-center items-center gap-[4px] rounded-[25px] p-1 w-[19%]" style={{background: 'rgba(0, 0, 0, 0.73)', boxShadow: '26.7921px 28.5206px 34.5704px -14.6924px rgba(0, 0, 0, 0.15)'}}>
             <img src="/Emoji.png" alt="Emoji" />
             <div className="text-[#A6A6A6] text-xs">Pay Once, Use Forever</div>
           </div>
         </div>
        
    </div>
  )
}
