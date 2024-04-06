import React, { useState } from 'react'
import left_image1 from '../../assets/leftimage1.png'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.svg'

const Signin = () => {
  const [signinMethod, setSigninMethod] = useState("phone")
  return (
    <div className='relative'>
      <div className='flex h-[10vh] bg-none w-full items-center justify-between px-5 z-10 absolute top-0'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="" className='w-10' draggable="false" />
          <div className='text-xl font-semibold text-white'>JioSaavn</div>
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <div className='text-xs'>Don't have a JioSaavn account yet?</div>
          <NavLink to={"/signup"} draggable="false">
            <button className='bg-none text-black font-semibold py-1 px-5 rounded-3xl text-sm border border-black hover:text-white hover:bg-black'>Signup</button>
          </NavLink>
        </div>
      </div>
      <div className='flex w-full h-full'>
        <div className="left w-1/2 bg-[rgb(49,92,134)] min-h-screen">
          <div className='flex flex-col items-center justify-center h-full'>
            <img src={left_image1} alt="" className='w-1/2 mb-5' />
            <h2 className='text-4xl text-white font-semibold'>All Your Music.</h2>
            <h2 className='text-2xl italic text-[rgb(83,155,218)] font-semibold'>Anytime, anywhere.</h2>
          </div>
        </div>
        <div className="right w-1/2 bg-[rgb(246,246,246)]">
          <div className='flex flex-col items-center justify-center h-full'>
            <div className='flex flex-col items-start justify-center w-1/2'>
              <h1 className='text-4xl font-semibold'>Welcome to JioSaavn.</h1>
              <h4>Log in or Sign up with your {(signinMethod == "phone") ? "mobile number." : "email address."}</h4>
            </div>
            <div className='flex flex-col items-start justify-center w-1/2 mt-7'>
              {(signinMethod == "phone") ?
                <form action="" className='w-full'>
                  <div className='relative w-full flex items-center'>
                    <input type="number" className='bg-white text-black font-semibold py-3 pl-28 pr-3 rounded-3xl w-full' placeholder='Enter your mobile number' />
                    <select name="" id="" className='absolute top-3 left-3'>
                      <option value="India">India</option>
                      <option value="India">USA</option>
                      <option value="India">Canada</option>
                      <option value="India">England</option>
                      <option value="India">Australia</option>
                    </select>
                  </div>
                  <button className='bg-[rgb(43,197,180)] text-white font-semibold py-2 px-5 rounded-3xl mt-5 text-xl w-full'>Continue</button>
                </form>
                :
                <form action="" className='w-full'>
                  <div className='relative w-full flex flex-col gap-4 items-center'>
                    <input type="text" className='bg-white text-black font-semibold py-3 pl-28 pr-3 rounded-3xl w-full' placeholder='Email Address' />
                    <input type="password" className='bg-white text-black font-semibold py-3 pl-28 pr-3 rounded-3xl w-full' placeholder='Password' />
                  </div>
                  <button className='bg-[rgb(43,197,180)] text-white font-semibold py-2 px-5 rounded-3xl mt-5 text-xl w-full'>Continue</button>
                </form>
              }
              <p className='w-full italic text-xs my-4'>
                {(signinMethod == "phone") ?
                  "Select ‘Continue’ to give consent to JioSaavn’s Terms of Service and acknowledge that you have read and understood the Privacy Policy. An SMS may be sent to authenticate your account, and message and data rates may apply."
                  :
                  "By selecting ‘Continue’, you agree to JioSaavn’s Terms of Service and Privacy Policy."
                }
              </p>
              <div className='w-full flex'>
                <div className='w-1/4'>
                  <div className='h-1/2 border-b border-[rgb(169,169,169)]'></div>
                  <div className='h-1/2'></div>
                </div>
                <div className='w-1/2 text-center text-sm text-[rgb(169,169,169)]'>OR CONNECT WITH</div>
                <div className='w-1/4'>
                  <div className='h-1/2 border-b border-[rgb(169,169,169)]'></div>
                  <div className='h-1/2'></div>
                </div>
              </div>
              <div className="w-full flex gap-2">
                {(signinMethod == "phone") ?
                  <button className='bg-black text-white py-2 px-5 rounded-3xl mt-5 text-lg w-1/2' onClick={() => setSigninMethod("email")}>Email</button>
                  :
                  <button className='bg-black text-white py-2 px-5 rounded-3xl mt-5 text-lg w-1/2' onClick={() => setSigninMethod("phone")}>Mobile Number</button>
                }
                <button className='bg-[rgb(61,87,152)] text-white font-semibold py-2 px-5 rounded-3xl mt-5 text-lg w-1/2'>Facebook</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin