import Image from "next/image";

export default function Home() {
    return (
        <div className="login-bg flex flex-col justify-center items-center">
            <div className="p-16 bg-blue w-[42rem] flex flex-col items-center gap-8">
                <Image
                    src="/logo2.png"
                    alt=""
                    height={168}
                    width={161}
                />
                <p className="text-[20px]">Radiant Portal Log In</p>
                <div className="w-full flex justify-center gap-8">
                    <button className="white-btn w-[15.5rem]">Sign In</button>
                    <button className="white-btn w-[15.5rem]">Register</button>
                </div>
            </div>

            <div className='absolute bottom-0 mb-4 w-full'>
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
            </div>
        </div>
    );
}
