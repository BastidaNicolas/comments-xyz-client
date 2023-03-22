import Image from "next/image";

import placeholderImg from "@/media/logo.png";

export default function UserAbout() {
  return (
    <div className="flex flex-col bg-neutral-800 rounded-lg px-1 sm:px-2.5 pb-2.5 mt-10 pt-0.5">
      <div className="flex flex-row">
        <div className="relative min-w-[4rem] mr-2.5">
          <Image
            className="absolute bottom-0"
            src={placeholderImg}
            alt="user profile image"
            height={64}
            width={64}
          />
        </div>
        <div className="text-lg font-bold truncate">Miguel Estefano</div>
      </div>
      <p className="text-sm font-normal my-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor, nulla pharetra sodales cursus, turpis ex iaculis tortor, nec
        eleifend sapien ipsum sed sapien.
      </p>
      <div className="flex items-center text-sm text-neutral-400 ">
        123 from 45 users
      </div>
    </div>
  );
}
