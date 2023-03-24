import Image from "next/image";
import ContributionButton from "./contributionButton";
import DeleteButton from "./deleteButton";
import ShareButton from "./shareButton";

import placeholderImg from "@/media/logo.png";
import Link from "next/link";

export default function Comment() {
  return (
    <div className="border-b border-neutral-600 px-1 py-2 md:p-2.5 grid grid-rows-[min-content_1fr] grid-cols-[min-content_1fr] md:grid-rows-[max-content_1fr] md:grid-cols-[max-content_1fr]">
      <div className="w-10 h-10 md:w-11 md:h-11 row-start-1 row-end-2 md:row-start-1 md:row-end-4 mr-2 mb-2 md:mb-0">
        <Link href={"/"}>
          <Image
            src={placeholderImg}
            className="object-cover"
            alt="user profile image"
            width={44}
            height={44}
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row row-start-1 row-end-2 col-start-2">
        <Link href={"/"} className=" md:mr-2 font-bold text-sm truncate">
          Miguel Estefano
        </Link>
        <div className="text-neutral-500 text-sm">1min</div>
      </div>
      <p className="text-sm mb-2 col-start-1 md:col-start-2 col-end-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        tempor, nulla pharetra sodales cursus, turpis ex iaculis tortor, nec
        eleifend sapien ipsum sed sapien.
      </p>
      <div className="flex flex-wrap justify-between row-start-3 row-end-4 col-start-1 md:col-start-2 col-end-3">
        <div className="flex flex-wrap">
          <ContributionButton />
          <ShareButton />
        </div>
        <DeleteButton />
      </div>
    </div>
  );
}
