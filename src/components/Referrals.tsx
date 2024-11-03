import React from 'react'
import Image from 'next/image'

export const Referrals = () => {
    return (
        <section className='m-top padding-x relative'>
            <Image
                src="/bg-shadow-1.svg"
                alt=''
                width={1334.08}
                height={1327.82}
                className='absolute z-[-5] top-[-40%] left-[-10%]'
            />
            <div className='bg-dark-gray flex flex-col items-center py-12'>
                <h2 className='text-heading'>Radiant Node Referrals</h2>

                <div className='flex gap-8'>
                    <div className='flex flex-col items-center gap-8 justify-between'>
                        <h2 className="text-bigger">CORE</h2>
                        <Image
                            src="/core.svg"
                            alt='CORE'
                            height={360}
                            width={362.67}
                        />
                        <ul className='list-disc'>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                        <button className='white-btn'>
                            BUY CORE
                        </button>
                    </div>
                    <div className='flex flex-col items-center gap-8 justify-between'>
                        <h2 className="text-bigger">PRIME</h2>
                        <Image
                            src="/prime.svg"
                            alt='PRIME'
                            height={360}
                            width={362.67}
                        />
                        <ul className='list-disc'>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                        <button className='white-btn'>
                            BUY PRIME
                        </button>
                    </div>
                    <div className='flex flex-col items-center gap-8 justify-between'>
                        <h2 className="text-bigger">ELITE</h2>
                        <Image
                            src="/elite.svg"
                            alt='ELITE'
                            height={360}
                            width={362.67}
                        />
                        <ul className='list-disc'>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                            <li>Lorem ipsum dolor sit amet, consectetur</li>
                        </ul>
                        <button className='white-btn'>
                            BUY ELITE
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
