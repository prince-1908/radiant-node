import Image from "next/image"

export const Footer = () => {
    return (
        <section className='m-top padding-x mb-12 relative'>
            <Image
                src="/bg-shadow-2.svg"
                alt=""
                height={1327.82}
                width={1334.08}
                className="absolute z-[-5] bottom-[-4rem] right-[-25%]"
            />
            <div className='flex flex-col gap-12'>
                <div className='flex justify-evenly'>
                    <div>Privacy Policy</div>
                    <div>Terms and Condition</div>
                    <div>Support</div>
                </div>
                <div className='text-center'>
                    © 2024 StrikeBit
                </div>
            </div>
        </section>
    )
}
