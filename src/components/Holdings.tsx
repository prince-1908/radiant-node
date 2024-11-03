import React from 'react'

export const Holdings = () => {
    return (
        <section className='m-top padding-x mb-48 relative'>
            <div className='bg-dark-gray flex flex-col items-center gap-16 py-12 px-48'>
                <h2 className='text-heading'>My Holdings</h2>

                <div className='w-full flex flex-col gap-16'>
                    <div className='flex justify-between'>
                        <div className='flex flex-col items-center'>
                            <p className='text-big text-white/70'>CORE</p>
                            <p className='text-heading'>XXX</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-big text-white/70'>PRIME</p>
                            <p className='text-heading'>XXX</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-big text-white/70'>ELITE</p>
                            <p className='text-heading'>XXX</p>
                        </div>
                    </div>
                    <div className='flex justify-evenly'>
                        <div className='flex flex-col items-center'>
                            <p className='text-big text-white/70'>rStrike</p>
                            <p className='text-heading'>XXX</p>
                            <button className='blue-btn'>CLAIM</button>
                        </div>
                        <div className='flex flex-col items-center'>
                            <p className='text-big text-white/70'>USDT</p>
                            <p className='text-heading'>XXX</p>
                            <button className='blue-btn'>WITHDRAW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
