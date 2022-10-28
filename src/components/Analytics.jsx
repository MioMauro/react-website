import React from 'react'

export const Analytics = () => {
return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src='https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
        <div className='ml-2 flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h2 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h2>
            <p>Loren30 Manage Data Analytics Centrally Loren30 Manage Data Analytics Centrally Loren30 Manage Data Analytics Centrally</p>
            <button className='text-[#00df9a] bg-black w-[200px] py-3 px-6 my-6 mx-auto font-medium md:mx-0 rounded-md'>Get Start</button>

        </div>
        </div>
    </div>
)
}
