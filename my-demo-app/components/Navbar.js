// import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { useRef } from 'react';


const Navbar = () => {
  // const toggleCart = () => {
  //     if(ref.current.classList.contains('translate-x-full')){
  //       ref.current.classList.remove('translate-x-full')
  //       ref.current.classList.add('translate-x-0')
  //     }
  //     else if(!ref.current.classList.contains('translate-x-full')){
  //       ref.current.classList.remove('translate-x-0')
  //       ref.current.classList.add('translate-x-full')
  //     }
  // }
  //  const ref = useRef()

  return (
    <div className=" flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-lg">
      <div className="logo mx-5 py-2">
        <Link href={"/"}><Image width={200} height={40} src="/logo.png" /></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-7 md:text-md ml-8'>
          <Link href={"/"}><li className="hover:-translate-y-1 hover:underline underline-offset-4 cursor-pointer hover:text-slate-900 text-slate-600 ">Home</li></Link>
          <Link href={"/"}><li className="hover:-translate-y-1 hover:underline underline-offset-4 cursor-pointer hover:text-slate-900 text-slate-600 ">About</li></Link>
          <Link href={"/contact"}><li className="hover:-translate-y-1 hover:underline underline-offset-4 cursor-pointer hover:text-slate-900 text-slate-600 ">Contact</li></Link>
          <Link href={"/tshirts"}><li className="hover:-translate-y-1 hover:underline underline-offset-4 cursor-pointer hover:text-slate-900 text-slate-600 ">Shopping</li></Link>
        </ul>
      </div>
      <div className="cart absolute right-0 top-4  mx-5">
        <FiShoppingCart className="text-xl md:text-3xl" />
        <Link href={"/cart"}></Link>
      </div>


       {/* <div ref={ref} className="sidebar absolute top-0 right-0 bg-yellow-200 p-10 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-2 right-2 cursor-pointer text-2xl text-brown-900"><AiFillCloseCircle /></span> 
      <ol>
        <li><span>T-shirts</span></li>
      </ol>
      </div>  */}
    </div>
  )
}

export default Navbar