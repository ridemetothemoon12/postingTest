import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();


    return (
        <>
            <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
                <div className='w-1/4 h-1/4 bg-white rounded-lg drop-shadow-lg flex justify-start items-center flex-col'>
                    <div className='bg-blue-300 w-5/6 h-2/5 mt-4 rounded-lg flex flex-col justify-center items-center drop-shadow-md'>
                        <input placeholder='아이디' className='placeholder-white w-11/12 h-10 bg-transparent border-b-2 text-white focus:outline-none'></input>
                        <input type='password' placeholder='비밀번호' className='placeholder-white w-11/12 h-10 bg-transparent text-white focus:outline-none'></input>
                    </div>
                    <div className='cursor-pointer text-slate-400 flex w-9/12 justify-around text-sm mt-3'>
                        <p className='hover:font-semibold'>아이디 찾기</p>
                        <p className='hover:font-semibold'>비밀번호 찾기</p>
                        <p onClick={() => navigate('/make')} className='hover:font-semibold'>회원가입</p>
                    </div>
                    <div className='bg-blue-300 w-5/6 h-10 mt-10 rounded-lg text-white font-medium text-center text-xl leading-10 cursor-pointer'>로그인</div>
                </div>
            </div>
        </>
    )
}

export default Login