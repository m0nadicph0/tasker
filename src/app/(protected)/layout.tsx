import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

export default function ProtectedLayout({ children }: { children: ReactNode }) {
    return (
        <div className='flex flex-row'>
            <div className="basis-2/12">
                <Sidebar />
            </div>
            <div className="basis-10/12">
                <div className="p-2">
                    {children}
                </div>
            </div>
        </div>
    )
}
