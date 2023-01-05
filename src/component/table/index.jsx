import React, { useMemo } from 'react'
import { ArrowDown } from '../../assets'

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
            text: 'Invoice',
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
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-4">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xs text-gray-700 uppercase bg-[#F9FAFB]">
                <tr>
                    {
                        tableHeaders?.map((item, index) => (
                            <th key={index} scope="col" className="p-4 text-[#667085]">
                                <div className="flex justify-between items-center">
                                    {
                                        item?.withInput &&
                                        <input id="checkbox-all-search" type={item?.inputType} className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                                    }
                                    <label htmlFor="checkbox-all-search" className={`${item?.readOnly ? 'sr-only' : ''}`}>{item?.text}</label>

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
        </table>
    </div>
  )
}

export {Table}