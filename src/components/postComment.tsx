import Image from "next/image";
import PostButton from "./postButton";

import placeholderImg from "@/media/logo.png";

export default function PostComment() {
  return (
    <form
      className="flex items-center rounded-lg border-b border-neutral-600 px-2.5 py-1.5 w-full focus-within:bg-neutral-800 focus-within:py-2.5 focus-within:items-start focus-within:flex-col"
      action=""
      method="post"
    >
      <div className="flex items-center focus-within:items-start w-full peer mb-1">
        <div className="relative mr-2.5 hidden md:block">
          <Image
            src={placeholderImg}
            alt="user profile image"
            height={44}
            width={44}
          />
        </div>
        <textarea
          className="h-5 focus:h-20 w-full bg-transparent resize-none text-sm overflow-hidden focus:overflow-auto focus:outline-none"
          placeholder="Write something, most likely no one will read it lol xd"
          maxLength={10000}
          name="commentInput"
          id="commentInput"
        ></textarea>
      </div>
      <PostButton />
    </form>
  );
}
