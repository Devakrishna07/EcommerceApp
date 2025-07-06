import React, { useState } from 'react'
import logo from '../assets/logo1.png'
import video from '../assets/loginbg.mp4'
import video2 from '../assets/bg2.mp4'
import api from '../routes/api'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const response = await api.post('/user/token/', {
                username,
                password
            });
            localStorage.setItem('accessToken', response.data.access);
            localStorage.setItem('refreshToken', response.data.refresh);
            alert("login successfull");
        }catch(error){
            console.error("login failed",error);
            alert("login failed");
        }
    };

    return (
        <div className="w-screen min-h-screen bg-white flex items-center justify-center overflow-hidden">
            <div className="hidden lg:flex w-[50vw] bg-blue-500 h-screen items-center justify-center">
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

            <div className="w-full lg:w-[50vw] h-screen bg-white flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full bg-blue-500 fixed top-0 left-0 h-16 flex items-center justify-start">
                    <img src={logo} alt="logo" className="w-18 my-2 mx-3" />
                    <span className="text-xm font-semibold"></span>
                </div>
                <div>
                    <video
                    src={video}
                    className="w-full h-screen object-cover lg:hidden"
                    autoPlay
                    loop
                    muted
                    playsInline
                />

                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset absolute top-50 right-1/9 sm:right-1/4 md:right-1/4 lg:right-1/9 bg-blue-500 border-base-500 rounded-xl w-xs flex flex-col justify-evenly h-[50%] border p-4 py-6">
                    <legend className="fieldset-legend text-xl text-black hover:text-xl font-bold cursor-pointer">Login</legend>

                    <div>
                        <label className="label text-black text-base font-semibold">Username</label>
                    <input type="text" value={username} className="input cursor-pointer bg-white text-black rounded-full hover:rounded-xl" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>

                    <div>
                        <label className="label text-black text-base font-semibold">Password</label>
                    <input type="password" value={password} className="input cursor-pointer text-black bg-white rounded-full hover:rounded-xl" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <button type='submit' className="btn btn-neutral mt-4 rounded-full hover:rounded-xl">Login</button>

                    <div className="w-full flex items-center justify-between text-black font-semibold my-3">
                        <h1 className="hover:text-white text-base cursor-pointer"><a>Create account</a></h1>
                        <h1 className="hover:text-white text-base cursor-pointer"><a>Forgot password ?</a></h1>
                    </div>
                </fieldset>
                </form>
                </div>
            </div>

        </div>
    )
}

export default Login
