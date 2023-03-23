"use client";
import Image from "next/image";
import { useState } from "react";

import placeholderImg from "@/media/logo.png";
import Link from "next/link";

export default function UserMenu() {
  const [clicked, setClicked] = useState<Boolean>(false);

  const handleOpen = () => {
    setClicked(!clicked);
    return;
  };

  return (
    <div
      className="absolute bottom-5 right-5 md:left-0 md:top-0 md:relative w-fit"
      id="nav-button"
    >
      <button
        className="flex justify-end bg-neutral-800 hover:bg-neutral-700 hover:cursor-pointer focus:bg-neutral-700 w-fit py-1 px-1 rounded-lg"
        onClick={handleOpen}
      >
        <div className="text-xs truncate text-right">
          <div
            className={`${
              clicked ? "block" : "hidden"
            } ml-4 mr-2 md:block font-bold truncate`}
          >
            Miguel Estefano
          </div>
          <div
            className={`${
              clicked ? "block" : "hidden"
            } ml-4 mr-2 md:block font-normal text-neutral-400 truncate`}
          >
            123 sol
          </div>
        </div>
        <div>
          <Image
            src={placeholderImg}
            alt="user profile image"
            height={32}
            width={32}
          ></Image>
        </div>
      </button>
      <nav
        className={`${
          clicked ? "" : "hidden"
        } absolute right-0 bottom-11 md:-bottom-[8.3rem] py-1 pl-4 pr-1 rounded-lg truncate text-right w-fit bg-neutral-800 z-40`}
      >
        <ul>
          <li>
            <Link
              className="flex justify-end mb-2 text-sm items-center text-neutral-400 hover:text-neutral-50"
              href="/"
            >
              Main{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-end mb-2 text-sm items-center text-neutral-400 hover:text-neutral-50"
              href="/"
            >
              Profile{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </Link>
          </li>
          <li className="block md:hidden">
            <Link
              className="flex justify-end mb-2 text-sm items-center text-neutral-400 hover:text-neutral-50"
              href="/"
            >
              Trending{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-end mb-2 text-sm items-center text-neutral-400 hover:text-neutral-50"
              href="/"
            >
              Settings{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link
              className="flex justify-end text-sm items-center text-neutral-400 hover:text-red-600"
              href="/lol"
            >
              Logout{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
