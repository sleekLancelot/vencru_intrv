import React, { useMemo } from 'react'
import { ArrowDown, Avatar_1, Avatar_2, Avatar_3, Avatar_4, Avatar_5, Avatar_6, Avatar_7, CheckMark, DownloadIcon } from '../../assets'

const Table = () => {
    const tableHeaders = useMemo(() => ([
        {
            text: 'Invoice',
            withInput: true,
            inputType: 'check',
            icon: <ArrowDown />,
            readOnly: false,
            sorted: true,
        },
        {
            text: 'Amount',
            readOnly: false,
        },
        {
            text: 'Date',
            readOnly: false,
        },
        {
            text: 'Status',
            readOnly: false,
        },
        {
            text: 'Users on plan',
            readOnly: false,
        },
        {
            text: 'download',
            readOnly: true,
        },
    ]), [])

    const tabledData = useMemo(() => ([
        {
            
        }
    ]))
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-[#F9FAFB]">
                <tr>
                    {
                        tableHeaders?.map((item, index) => (
                            <th key={index} scope="col" className="p-4 text-[#667085]">
                                <div className="flex items-center">
                                    {
                                        item?.withInput &&
                                        <input id="checkbox-all-search" type={item?.inputType} className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    }
                                    <label htmlFor="checkbox-all-search" className={`${item?.readOnly ? 'sr-only' : ''} mr-2`}>{item?.text}</label>

                                    {
                                        item?.icon ?
                                        item?.icon : null
                                    }
                                </div>
                            </th>
                        ))
                    }
                </tr>
            </thead>

            <tbody>
                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - Dec 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        DEC, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_4} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_5} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_6} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - NOV 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        NOV, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_4} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_5} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_7} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - OCT 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        OCT, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_4} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_5} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - SEP 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        SEP, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - AUG 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        AUG, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_4} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - JUL 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        JUL, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_4} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

                <tr className="bg-white border-b hover:bg-gray-50">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        <input id="checkbox-all-search" type='checkbox' className="mr-2 w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                        <p>Basic Plan - JUN 2022</p>
                    </th>
                    <td className="px-6 py-4">
                        USD $10.00
                    </td>
                    <td className="px-6 py-4">
                        JUN, 1 2022
                    </td>
                    <td className="flex items-center px-4 py-1 my-6 rounded-2xl bg-[#ECFDF3]">
                        <p className='mr-2'><CheckMark /></p>
                        <p>paid</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                          <div className="mt-3 flex -space-x-2 overflow-hidden">
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_1} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_2} alt=""/>
                            <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src={Avatar_3} alt=""/>
                        </div>
                    </td>
                    <td>
                        <div><DownloadIcon /></div>
                    </td>
                </tr>

            </tbody>
        </table>
    </div>
  )
}

export {Table}