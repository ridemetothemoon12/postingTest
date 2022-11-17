import React, { useRef, useState } from 'react'


function Make() {
    const input = useRef([]);
    const [nameInput, setNameInput] = useState('');
    const [idInput, setIdInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const [passwordMessage, setPasswordMessage] = useState('');
    const handleUserName = (e) => {
        setNameInput(e.target.value)
        input.current[0].focus();
    }
    const handleUserId = (e) => {
        setIdInput(e.target.value)
        input.current[1].focus();
    }
    const handleUserPassword = (e) => {
        setPasswordInput(e.target.value)
        input.current[2].focus();
    }
    const handleUserConfirmPassword = (e) => {
        setConfirmPasswordInput(e.target.value)
        input.current[3].focus();

        if(e.target.value.length !== 0) {
            if(passwordInput === e.target.value) {
                setPasswordMessage("맞다")
            }
            else {
                setPasswordMessage("틀렸다")
            }
        }
        else {
            setPasswordMessage("")
        }
    }

    return (
        <>
            <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
                <div className='w-1/4 h-3/4 bg-white'>
                    <h3 className='text-3xl my-3 mx-3 text-slate-500'>회원 가입</h3>
                    <form>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((nameInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>이름</p>
                            <input name='name' ref={(e) => (input.current[0] = e)} onChange={handleUserName} className='w-full h-[50%] focus:outline-none border-b-2 border-black'></input>
                        </div>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((idInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>이메일</p>
                            <input name='id' ref={(e) => (input.current[1] = e)} onChange={handleUserId} className='w-full h-[50%] focus:outline-none border-b-2 border-black'></input>
                        </div>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((passwordInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>비밀번호</p>
                            <input type={'password'} name='password' ref={(e) => (input.current[2] = e)} onChange={handleUserPassword} className='w-full h-[50%] focus:outline-none border-b-2 border-black'></input>
                        </div>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((confirmPasswordInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>비밀번호 확인</p>
                            <input type={'password'} name='password' ref={(e) => (input.current[3] = e)} onChange={handleUserConfirmPassword} className='w-full h-[50%] focus:outline-none border-b-2 border-black'></input>
                            <p className='text-slate-500 text-sm'>{passwordMessage}</p>
                        </div>
                    </form>
                    <button type="submit" className='w-11/12 h-12 bg-blue-300 mx-auto rounded-lg flex justify-center items-center'>
                        <p className='text-white text-lg font-medium'>가입 완료</p>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Make