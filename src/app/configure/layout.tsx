import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Steps from '@/components/Steps'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode}) => {
    return (
        <MaxWidthWrapper className='flex flex-1 flex-col'>
            <Steps />
            {children}
        </MaxWidthWrapper>
    )
}

export default Layout
