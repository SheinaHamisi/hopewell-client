import React from 'react'
import ActivateButton from './components/ActivateButton'
import Illustration from './../assets/images/illustration.png'

function Activate() {
    return (
        <div className='bg-primary w-full h-screen sm:p-6 md:p-14 grid items-center'>
            <div className="bg-white grid md:grid-cols-1 xl:grid-cols-3 rounded sm:p-6 md:p-14 h-full">
                <div className='col-span-2 md:grid items-center hidden'>
                    <img src={Illustration} alt="happy" />
                </div>
                <div className='col-span-1 flex items-center justify-center flex-col px-5'>
                    <p className='text-gray-700 font-bold text-7xl text-center'>Hooray Eric!</p>
                    <p className='mt-8 text-xl text-center mb-8'>You're almost there! Just one click away to activate your HopeWell Account.</p>
                    <ActivateButton text="Activate"/>
                </div>
            </div>
        </div>
    )
}

export default Activate
