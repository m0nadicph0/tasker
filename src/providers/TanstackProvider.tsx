'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export default function TanstackProvider({ children }: { children: ReactNode }) {
    const queryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </div>
    )
}
