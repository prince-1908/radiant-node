import Image from "next/image"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { UserRound, MessageCircleMore } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="flex justify-between padding-x">

            {/* logo */}
            <Image
                src="/logo1.png"
                alt="StrikeBit"
                height={100}
                width={100}
                className=""
            />

            {/* buttons */}
            <div className="flex justify-center items-center gap-4">

                {/* discord button */}
                <button className="border border-blue p-4">
                    <Image
                        src="/discord-blue.svg"
                        alt="join our discord"
                        height={18.85}
                        width={24.35}

                    />
                </button>

                {/* upgrade pro button */}
                <button className="blue-btn">Upgrade Pro</button>

                {/* user details select tab */}
                <Select>
                    <SelectTrigger className="w-[14.75rem] h-[3.5rem]">
                        <SelectValue placeholder={
                            <div className="flex items-center justify-center gap-2 w-full">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <span>User Name</span>
                            </div>
                        } />
                    </SelectTrigger>
                    <SelectContent className="pt-2">
                        <SelectItem value="acc" className="flex justify-center items-center py-2 text-small hover:bg-white/5 transition">
                            <div className="flex items-center justify-center gap-4">
                                <UserRound />
                                <span>Account Details</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="dark" className="flex justify-center items-center py-2 pb-4 text-small hover:bg-white/5 transition">
                            <div className="flex items-center justify-center gap-4">
                                <MessageCircleMore />
                                Contact Support
                            </div>
                        </SelectItem>
                        <SelectItem value="system" className="flex justify-center items-center bg-red py-4 text-small">
                            Logout
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </nav>
    )
}
