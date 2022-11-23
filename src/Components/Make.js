import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

  function Make() {
    const navigate = useNavigate();
    
    const input = useRef([]);
    const [nameInput, setNameInput] = useState('');
    const [idInput, setIdInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [confirmPasswordInput, setConfirmPasswordInput] = useState('');

    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState(false);
    const [idMessage, setIdMessage] = useState(false);

    const handleUserName = (e) => {
        setNameInput(e.target.value)
        input.current[0].focus();
    }
    const handleUserId = (e) => {
        const regex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        setIdInput(e.target.value)
        input.current[1].focus();
        if(regex.test(e.target.value) === true) {
            setIdMessage(true)
        } else {
            setIdMessage(false)
        }
    }
    const handleUserPassword = (e) => {
        const regexPass = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/
        setPasswordInput(e.target.value)
        input.current[2].focus();
        if(regexPass.test(e.target.value) === true) {
            setPasswordConfirm(true)
        } else {
            setPasswordConfirm(false)
        }
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
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        await createUserWithEmailAndPassword(auth, idInput, confirmPasswordInput);
        await updateProfile(auth.currentUser, {displayName: nameInput})
    }  
    return (
        <>
            <div className='w-full h-screen bg-slate-300 flex justify-center items-center'>
                <div className='w-1/4 h-3/4 bg-white rounded-lg'>
                    <h3 className='text-3xl my-3 mx-3 text-slate-500'>회원 가입</h3>
                    <form onSubmit={(e) => handleOnSubmit(e)}>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((nameInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>이름</p>
                            <input 
                                name='name' 
                                ref={(e) => (input.current[0] = e)} 
                                onChange={handleUserName} 
                                className='w-full h-[50%] focus:outline-none border-b-[1px] border-slate-300'>
                            </input>
                            {
                                (nameInput.length !== 0 ? (nameInput.length < 2 ? <p className='pt-1 text-red-400 text-sm'>2글자 이상 5글자 이하로 작성해주세요.</p> : <p className='pt-1 text-slate-500 text-sm'>완료</p>) : <p></p>)
                            }
                        </div>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((idInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>이메일</p>
                            <input 
                                name='id' 
                                ref={(e) => (input.current[1] = e)} 
                                onChange={handleUserId} 
                                value={ idInput }
                                className='w-full h-[50%] focus:outline-none border-b-[1px] border-slate-300'>
                            </input>
                            {
                                (idInput.length !== 0 ? (idMessage === false ? <p className='pt-1 text-red-400 text-sm'>이메일 양식에 맞게 작성해주세요.</p> : <p className='pt-1 text-slate-500 text-sm'>완료</p>) : <p></p>)
                            }
                        </div>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((passwordInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>비밀번호</p>
                            <input 
                                type={'password'} 
                                name='password' 
                                ref={(e) => (input.current[2] = e)} 
                                onChange={handleUserPassword} 
                                className='w-full h-[50%] focus:outline-none border-b-[1px] border-slate-300'>
                            </input>
                            {
                                (passwordInput.length !== 0 ? (passwordConfirm === false ? <p className='pt-1 text-red-400 text-sm'>비밀번호는 8자리 이상 숫자와 문자 그리고 특수문자를 사용해서 작성해주세요.</p> : <p className='pt-1 text-slate-500 text-sm'>완료</p>) : <p></p>)
                            }
                        </div>
                        <div className='w-[90%] h-24 mx-auto my-10 relative'>
                            <p className={`${((confirmPasswordInput.length !== 0) ? 'top-[-10%] text-orange-500 text-xs' : 'top-3')} text-slate-500 absolute duration-200 left-1`}>비밀번호 확인</p>
                            <input 
                                type={'password'} 
                                name='password' 
                                ref={(e) => (input.current[3] = e)} 
                                onChange={handleUserConfirmPassword} 
                                value={ confirmPasswordInput }
                                className='w-full h-[50%] focus:outline-none border-b-[1px] border-slate-300'>
                            </input>
                            <p className='text-slate-500 text-sm'>{passwordMessage}</p>
                        </div>
                        <button type="submit" className='w-11/12 h-12 bg-blue-300 mx-auto rounded-lg flex justify-center items-center hover:bg-blue-500 duration-200 disabled:bg-slate-400' 
                                disabled={(nameInput !== 0 && idMessage !== false && passwordConfirm !== false && passwordMessage === "맞다") ? false : true}
                                onClick={() => navigate(-1)}>
                            <p className='text-white text-lg font-medium'>가입 완료</p>
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Make