import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='flex items-center justify-center p-4 w-full h-8 text-red-500 border-b-2 border-red-500 shadow-md uppercase md:h-20 lg:px-20 xl:px-40'>
        <div className='font-bold text-xl md:font-bold  text-center '>
            <Link href={"/"}>Recipe App</Link>
        </div>
    </div>
  )
}

export default Navbar