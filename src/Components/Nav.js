import React, { useEffect, useState } from 'react'

function Nav() {
    const [hamMenuClick, setHamMenuClick] = useState(false);
    console.log(hamMenuClick)
    return (
    <>
        <div className='w-full h-20 bg-slate-400 drop-shadow-xl fixed'>
            <div id='navBar' className='w-4/5 h-full flex justify-between items-center mx-auto '>
                <div id='searchBar' className='w-1/5 h-14 bg-white rounded-full flex justify-around items-center drop-shadow-xl'>
                    <input className='w-3/5 h-10 focus:outline-none' placeholder='Search!'></input>
                    <button className='w-1/6 h-11 bg-slate-400 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-200 font-semibold'>GO</button>
                </div>
                <div className='w-36 flex justify-between'>
                    <div className='w-12 h-12 bg-white rounded-full drop-shadow-xl text-center leading-[46px] cursor-pointer font-semibold hover:bg-blue-400 hover:text-white duration-200'>Login</div>
                    <div onClick={() => setHamMenuClick(!hamMenuClick)} className={`${hamMenuClick === true && 'bg-blue-400'} w-12 h-12 bg-white rounded-full drop-shadow-xl flex justify-center items-center flex-col cursor-pointer hover:bg-blue-400 duration-200 group`}>
                        <div className={`${hamMenuClick === true && 'bg-slate-50'} w-6 h-1 rounded-xl group-hover:bg-white duration-200 bg-black`}></div>
                        <div className={`${hamMenuClick === true && 'bg-slate-50'} w-6 h-1 rounded-xl group-hover:bg-white duration-200 bg-black my-1`}></div>
                        <div className={`${hamMenuClick === true && 'bg-slate-50'} w-6 h-1 rounded-xl group-hover:bg-white duration-200 bg-black`}></div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Nav