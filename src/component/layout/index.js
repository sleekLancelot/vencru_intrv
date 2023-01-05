import React from 'react'
import { DesktopSidebar } from '../sidebar'

const Layout = ({children}) => {
  return (
    <div>
        <div className='relative min-h-screen md:flex'>
        <DesktopSidebar />
        <div className='flex-1 px-5 py-10 md:p-10 bg-[#f5f5f5] min-h-screen relative md:top-0 top-20 overflow-x-hidden'>
            {
                children
            }
        </div>
        {/* <main className='p-10 bg-[#f5f5f5] min-h-screen w-[100vw]'>
            <h3 className='text-2xl font-semibold'>Settings</h3>
        </main> */}
    </div>
    </div>
  )
}

export {Layout}