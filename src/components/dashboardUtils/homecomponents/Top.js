import React from 'react';

export default function Top() {
  return (
    <div className='flex justify-center m-[40px] gap-[20px] w-[85%]'>

            <div className=" bg-[#FFFFFF] rounded-[8px] flex justify-start items-center w-[30%] h-[149px] gap-[22px] pl-[35px]" style={{boxShadow: "0px 12.5077px 41.6925px rgba(160, 163, 189, 0.1);"}}>
                <img src="/google.png" alt="" />
                <div className="flex flex-col gap-[8px]">
                    <div className="text-[#000] font-extrabold text-lg">120</div>
                    <div className="text-xs text-[#4F4F4F]">Google Leads</div>
                </div>
            </div>

            <div className=" bg-[#FFFFFF] rounded-[8px] flex justify-start items-center w-[30%] h-[149px] gap-[21px] pl-[35px]" style={{boxShadow: "0px 12.5077px 41.6925px rgba(160, 163, 189, 0.1);"}}>
                <img src="/facebook.png" alt="" />
                <div className="flex flex-col gap-[8px]">
                    <div className="text-[#000] font-extrabold text-lg">200</div>
                    <div className="text-xs text-[#4F4F4F]">Facebook Leads</div>
                </div>
            </div>

            <div className=" bg-[#FFFFFF] rounded-[8px] flex justify-start items-center w-[30%] h-[149px] gap-[21px] pl-[35px]" style={{boxShadow: "0px 12.5077px 41.6925px rgba(160, 163, 189, 0.1);"}}>
                <img src="/people.png" alt="" />
                <div className="flex flex-col gap-[8px]">
                    <div className="text-[#000] font-extrabold text-lg">230</div>
                    <div className="text-xs text-[#4F4F4F]">Leads Contacted</div>
                </div>
            </div>

            <div className=" bg-[#FFFFFF] rounded-[8px] flex justify-start items-center w-[30%] h-[149px] gap-[21px] pl-[35px]" style={{boxShadow: "0px 12.5077px 41.6925px rgba(160, 163, 189, 0.1);"}}>
                <img src="/note.png" alt="" />
                <div className="flex flex-col gap-[8px]">
                    <div className="text-[#000] font-extrabold text-lg">50</div>
                    <div className="text-xs text-[#4F4F4F]">Reports Generated</div>
                </div>
            </div>

    </div> 
  )
}
