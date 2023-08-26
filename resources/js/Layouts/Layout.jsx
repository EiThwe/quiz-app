import { Footer } from '@mantine/core'
import React from 'react'

const Layout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
        <div className="header w-full position-fixed top-0 left-0 right-0">Header</div>
        <Footer/>
    </div>
  )
}

export default Layout
