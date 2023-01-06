import React, {useState} from 'react';

export default function Navigation(props) {
 

  return (
    <div className='w-full flex justify-around items-center gap-[5px] p-[30px] bg-white'>

        <div className=" flex justify-start items-center">
            <img src="/Icon.png" alt="logo" className='px-1 w-[35%] h-auto' />
            <div className="font-leadfont text-sm font-bold text-[15.95px]">Leadaio</div>
        </div>


        <div className="middle flex justify-around gap-[13px]">

                <div className="flex text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("home")}>
                 {props.page == "home" ?
                    <img src="/dashboardactive.png" alt="logo" className='px-1 w-[23%] h-auto' />
                  :
                    <img src="/dashboard.png" alt="logo" className='px-1 w-[23%] h-auto' />     
                  }
                    <div className="">Dashboard</div>
                </div>
        
                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("findleads")}>
                 {props.page == "findleads" ?
                    <img src="/findleadsactive.png" alt="logo" className='px-1 w-[23%] h-auto' />
                  :
                    <img src="/findleads.png" alt="logo" className='px-1 w-[23%] h-auto' />     
                  }
                    <div className="">Find Leads</div>
                </div>

                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("manageleads")}>
                  {props.page == "manageleads" ?
                    <img src="/manageLeadsactive.png" alt="logo" className='px-1 w-[23%] h-auto' />
                  :
                    <img src="/manageLeads.png" alt="logo" className='px-1 w-[23%] h-auto' />     
                  }
                    <div className="">Manage Leads</div>
                </div>

                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("reports")}>
                  {props.page == "reports" ?
                    <img src="/reportsactive.png" alt="logo" className='px-1 w-[34%%] h-auto' />
                  :
                    <img src="/reports.png" alt="logo" className='px-1 w-[34%%] h-auto' />     
                  }
                    <div className="">Reports</div>
                </div>

                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("contactleads")}>
                  {props.page == "contactleads" ?
                    <img src="/contactleads.png" alt="logo" className='px-1 w-[23%] h-auto' />
                  :
                    <img src="/contactleads.png" alt="logo" className='px-1 w-[23%] h-auto' />     
                   }
                    <div className="">Contacts leads</div>
                </div>

                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("seoTools")}>
                  {props.page == "seoTools" ?
                    <img src="/seoToolsactive.png" alt="logo" className='px-1 w-[29px] h-auto' />
                  :
                    <img src="/seoTools.png" alt="logo" className='px-1 w-[29px] h-auto' />     
                   }
                    <div className="">SEO Tools</div>
                </div>

        </div>

        <div className="last flex justify-around">
                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("notifications")}>
                  {props.page == "notifications" ?
                    <img src="/Notification.png" alt="logo" className='px-1 w-[23%] h-auto' />
                  :
                    <img src="/notificationEmpty.png" alt="logo" className='px-1 w-[23%] h-auto' />     
                   }
                </div>

                <div className="flex  text-[#696969] text-sm cursor-pointer" onClick={() => props.setPages("Profile")}>
                    <div className="">Icon</div>
                    <div className="">Profile</div>
                </div>
        </div>



    </div>
  )
}
