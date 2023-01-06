import React from 'react'

export default function Bottom() {
  return (
    <div className='w-[86%] flex justify-between gap-5 m-[40px]'>
       {/* left section */}
        <div className="w-50% bg-[#FFFFFF] rounded-[10px] h-[239px] p-[20px]">
         <table class="table-auto border-spacing-2 text-left">
            <thead>
                <tr className='text-[#848484]'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                </tr>
            </thead>
            <tbody className='text-xs p-9 '>
                <tr className='bg-[#F7F7F7] bg-card rounded'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
                <tr className='bg-card rounded'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
                <tr className='bg-[#F7F7F7] bg-card rounded'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
                <tr className='bg-card rounded p-2'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
            </tbody>
          </table>

        </div>



       {/* right section */}

       <div className="w-50% bg-[#FFFFFF] rounded-[10px] h-[239px] p-[15px]">
         <table class="table-auto border-spacing-2 text-left">
            <thead>
                <tr className='text-[#848484]'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
                </tr>
            </thead>
            <tbody className='text-xs p-9 '>
                <tr className='bg-[#F7F7F7] bg-card rounded'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
                <tr className='bg-card rounded'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
                <tr className='bg-[#F7F7F7] bg-card rounded'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
                <tr className='bg-card rounded p-2'>
                <td className='p-2'>Chris beauty hair salon</td>
                <td className='p-2'>example@yourdomain.com</td>
                <td className='p-2'>(786) 252-8856</td>
                <td className='p-2 text-[#FF8881]'>Visit Website</td>
                </tr>
            </tbody>
          </table>

        </div>

        
    </div>
  )
}
