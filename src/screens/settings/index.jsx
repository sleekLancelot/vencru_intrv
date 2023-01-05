import React, { useMemo, useState } from 'react'
import { Layout, Table } from '../../component'
import { DownloadIcon, Mail, MasterCard, Plus, VisaCard } from '../../assets'

const CARD = {
    VISA: 'visa',
    MASTER: 'master',
}

const Settings = () => {
    const [activeCard, setActiveCard] = useState(CARD.VISA)

    const menuList = useMemo(() => ([
        'My details',
        'Profile',
        'Password',
        'Teams',
        'Plan',
        'Billing',
        'Notifications',
        'Integrations',
        'API',
    ]), [])

  return (
    <Layout>
        <div className='settings'>
            <header className='block'>
                <h3 className='text-3xl font-semibold'>Settings</h3>
                <p className="text-base font-normal mt-3 text-[#667085]">Manage your team and preferences here.</p>

                <ul className='flex justify-between items-center max-[768px]:w-[100vw] md:w-auto overflow-auto max-[768px]:absolute max-[768px]:left-0 max-[768px]:right-0 rounded-lg bg-[#fff] border border-[#D0D5DD] border-solid shadow-[0px_1px_2px_0px_rgba(16, 24, 40, 0.05)] my-8'>
                    {
                        menuList?.map((item, index) => (
                            <li
                                key={index}
                                className={`${index === menuList?.length - 1 ? 'border-0 w-[40px]' : 'border-r-[1px]'} h-[50px] w-full min-w-[95px] py-2 px-4 text-sm font-medium text-[#344054] hover:bg-[#F9FAFB] hover:text-[#1D2939] cursor-pointer`}
                            >{item}</li>
                        ))
                    }
                </ul>
            </header>

            <section className='space-y-2 my-8 relative max-[768px]:mt-32'>
                <div className='pb-5 border-b-2 border-[rgba(52,64,84,0.1)]'>
                    <h6 className='text-lg font-medium text-[#101828]'>Payment method</h6>
                    <p className='text-sm font-normal text-[#667085]'>Update your billing details and address.</p>
                </div>

                <section className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5 border-b-2 border-[rgba(52,64,84,0.1)]'>
                    <div>
                        <h6 className='text-sm font-medium text-[#344054]'>Contact email</h6>
                        <p className='text-sm font-normal text-[#667085]'>Where should invoices be sent?</p>
                    </div>

                    <ul className="grid gap-3 space-y-2">
                      
                        <li className="flex">
                            <div className="flex items-center h-5">
                                <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-[#7F56D9] bg-gray-100 border-gray-300 focus:ring-[#7F56D9] focus:outline-none" />
                            </div>
                            <div className="ml-2 text-sm">
                                <label htmlFor="helper-radio" className="font-medium text-[#344054]">Send to my account email</label>
                                <p id="helper-radio-text" className="font-normal text-[#667085]">olivia@untitledui.com</p>
                            </div>
                        </li>

                        <li className="flex">
                            <div className="flex items-center h-5">
                                <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value="" className="w-4 h-4 text-[#7F56D9] bg-gray-100 border-gray-300 focus:ring-[#7F56D9] focus:outline-none" />
                            </div>
                            <div className="ml-2 text-sm">
                                <label htmlFor="helper-radio" className="font-medium text-[#344054]dark:text-gray-300">Send to an alternative email</label>
                                <div className="relative mt-2 mb-6">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <Mail />
                                    </div>
                                    <input type="text" id="input-group-1" className="bg-[#fff] border border-gray-300 text-black text-base rounded-lg placeholder-[#101828] placeholder:text-base focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="billing@untitledui.com" />
                                </div>
                            </div>
                        </li>

                    </ul>
                </section>

                <section className='grid grid-cols-1 md:grid-cols-2 gap-4 py-5 border-b-2 border-[rgba(52,64,84,0.1)]'>
                    <div>
                        <h6 className='text-sm font-medium text-[#344054]'>Card details</h6>
                        <p className='text-sm font-normal text-[#667085]'>Select default payment method</p>
                    </div>

                    <div className="grid gap-3 space-y-2">
                        <div
                            className={`relative w-full rounded-lg bg-white flex p-4 text-sm border cursor-pointer ${activeCard === CARD.VISA ? 'border-[#D6BBFB] bg-[#F9F5FF]' : 'border-[#EAECF0]'}`}
                            onClick={() => setActiveCard(CARD.VISA)}
                        >
                            <div className='mr-5'><VisaCard /></div>

                            <div className='grid gap-2'>
                                <div>
                                    <p className={`font-medium ${activeCard === CARD.VISA ? 'text-[#53389E]' : 'text-[#344054]'}`}>Visa ending in 1234</p>
                                    <p className={`font-normal ${activeCard === CARD.VISA ? 'text-[#7F56D9]' : 'text-[#667085]'}`}>Expiry 06/24</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className={`font-medium ${activeCard === CARD.VISA ? 'text-[#9E77ED]' : 'text-[#667085]'}`}>Set as default</p>
                                    <p className={`font-medium text-[#6941C6]`}>Edit</p>
                                </div>
                            </div>

                            <div>
                                <input id="bordered-checkbox-1" type="checkbox" value={'visa'} checked={activeCard === CARD.VISA} name="bordered-checkbox" className="absolute top-2 right-2 w-4 h-4 text-[#7F56D9] bg-[#7F56D9] border border-[#7F56D9] rounded-[50%] focus:ring-[#7F56D9] focus:ring-2" />
                            </div>
                        </div>

                        <div
                            className={`relative w-full rounded-lg bg-white flex p-4 text-sm border cursor-pointer ${activeCard === CARD.MASTER ? 'border-[#D6BBFB] bg-[#F9F5FF]' : 'border-[#EAECF0]'}`}
                            onClick={() => setActiveCard(CARD.MASTER)}
                        >
                            <div className='mr-5'><MasterCard /></div>

                            <div className='grid gap-2'>
                                <div>
                                    <p className={`font-medium ${activeCard === CARD.MASTER ? 'text-[#53389E]' : 'text-[#344054]'}`}>Mastercard ending in 1234</p>
                                    <p className={`font-normal ${activeCard === CARD.MASTER ? 'text-[#7F56D9]' : 'text-[#667085]'}`}>Expiry 06/24</p>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className={`font-medium ${activeCard === CARD.MASTER ? 'text-[#9E77ED]' : 'text-[#667085]'}`}>Set as default</p>
                                    <p className={`font-medium text-[#6941C6]`}>Edit</p>
                                </div>
                            </div>

                            <div>
                                <input id="bordered-checkbox-1" type="checkbox" value={'master'} checked={activeCard === CARD.MASTER} name="bordered-checkbox" className="absolute top-2 right-2 w-4 h-4 text-[#7F56D9] bg-[#7F56D9] border border-[#7F56D9] rounded-[50%] focus:ring-[#7F56D9] focus:ring-2" />
                            </div>
                        </div>

                        <div className='flex cursor-pointer'>
                            <div className='mr-2'>{<Plus />}</div>
                            <p className='text-sm font-medium text-[#667085]'>Add new payment method</p>
                        </div>

                    </div>
                </section>
            </section>

            <section className='space-y-2 my-8'>
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <p className="text-lg font-medium text[#101828]">Billing history</p>

                    <button className='flex justify-between items-center py-2 px-4 bg-white rounded-lg border border-[#D0D5DD] max-[768px]:mt-3'>
                        <p className='mr-2'><DownloadIcon /></p>
                        <p className='text-sm font-medium text[#344054]'>Download all</p>
                    </button>
                </header>

                <Table />
            </section>
        </div>
    </Layout>
  )
}

export {Settings}