import Link from "next/link";
import Image from "next/image";

import placeholderImg from "@/media/logo.png"


export default function UserCard() {
  return (
        <Link href="/test" className="p-1 rounded-lg flex hover:bg-neutral-700 hover:cursor-pointer">
            <div className="min-w-[2rem] mr-2.5">
                <Image src={placeholderImg} alt="user profile image" height={32} width={32}/>
            </div>
            <div className="text-xs truncate">
                <div className="font-bold truncate">Miguel Estefano</div>
                <div className="font-normal text-neutral-400 truncate">123 sol</div>
            </div>
        </Link>
    );
}
