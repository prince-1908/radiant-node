import React from 'react'
import { Copy, Share2 } from 'lucide-react'
import Image from 'next/image'

export const Subscription = () => {
    return (
        <section className='padding-x m-top'>
            <div className='bg-blue p-16 grid grid-cols-3'>
                <div className='flex flex-col gap-7'>
                    <h2 className='text-big'>Your Personal Refferal code:</h2>
                    <div className='bg-white flex justify-between px-4 py-2'>
                        <p className='text-blue text-mid'>XXXXXXXXXXXXX</p>
                        <div className='flex gap-4 items-center justify-center'>
                            <Copy size={24} className='text-blue'/>
                            <Share2 size={24} className='text-blue'/>
                        </div>
                    </div>
                </div>

                <div className='flex items-end px-12'>
                    <Image
                        src="/google.svg"
                        alt='Google'
                        height={56}
                        width={56}
                    />
                    <div className='px-4'>
                        <p className='text-small'>Google ID</p>
                        <p className='text-[20px] font-semibold'>user@gmail.com</p>
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button className='bg-gray h-full text-mid px-8'>
                        Free Plan
                    </button>
                </div>
            </div>
        </section>
    )
}
