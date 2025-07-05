import React from 'react'
import logo from '../assets/logo1.png'
import video from '../assets/loginbg.mp4'
import video2 from '../assets/bg2.mp4'

function Login() {
    return (
        <div className="w-screen min-h-screen bg-white flex items-center justify-center overflow-hidden">
            <div className="hidden md:flex w-[50vw] bg-blue-500 h-screen items-center justify-center">
                <video
                    src={video2}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <img
                    src={logo}
                    alt="logo"
                    className="absolute top-1/2 left-1/4 w-[25%] transform -translate-x-1/2 -translate-y-1/2 z-10"
                />
            </div>

            <div className="w-full md:w-[50vw] h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full bg-blue-500 fixed top-0 left-0 h-16 flex items-center justify-start">
                    <img src={logo} alt="logo" className="w-18 my-2 mx-3" />
                    <span className="text-xm font-semibold"></span>
                </div>
                <fieldset className="fieldset bg-blue-500 border-base-500 rounded-xl w-xs flex flex-col justify-evenly h-[50%] border p-4 py-6">
                    <legend className="fieldset-legend text-sm text-black hover:text-xl cursor-pointer">Login</legend>

                    <div>
                        <label className="label text-black font-semibold">Email</label>
                    <input type="email" className="input cursor-pointer bg-white text-black rounded-full hover:rounded-xl" placeholder="Email" />
                    </div>

                    <div>
                        <label className="label text-black font-semibold">Password</label>
                    <input type="password" className="input cursor-pointer text-black bg-white rounded-full hover:rounded-xl" placeholder="Password" />
                    </div>

                    <button className="btn btn-neutral mt-4 rounded-full hover:rounded-xl">Login</button>

                    <div className="w-full flex items-center justify-between text-black font-semibold my-3">
                        <h1 className="hover:text-white cursor-pointer"><a>Create account</a></h1>
                        <h1 className="hover:text-white cursor-pointer"><a>Forgot password ?</a></h1>
                    </div>
                </fieldset>
            </div>

        </div>
    )
}

export default Login
