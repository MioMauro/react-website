import React from 'react'
import {AiFillDribbbleSquare,
        AiFillFacebook,
        AiFillGithub,
        AiFillInstagram,
        AiFillTwitterSquare} from 'react-icons/ai'

export const Footer = () => {
return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
        <h2 className='w-full text-3xl font-bold text-[#00df9a]'>Tailwind</h2>
        <p className='py-4'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms</p>
        <div className='flex justify-between md:w-[75%] my-6'>
        <AiFillFacebook size={30} />
        <AiFillDribbbleSquare/>    
        <AiFillGithub />
        <AiFillInstagram />
        <AiFillTwitterSquare />
        </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        
        <div>
        <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>

        <div>
        <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>

        <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blogs</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>

        <div>
        <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>                
            </ul>
        </div>
        </div>
    </div>
)
}
