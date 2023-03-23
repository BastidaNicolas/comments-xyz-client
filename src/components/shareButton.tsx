"use client";

import { useState } from "react";

export default function ShareButton() {

  const [open, setOpen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const handleOpen = (e: any) => {
    if (e.target.id === "shareButton" || e.target.id === "modalBackdrop") {
      setOpen(!open);
    }
    return;
  };

  const handleCopy = (e: any) => {
    if (e.target.id === "") {
      return;
    }
    let copiedLink = e.target.parentElement.previousSibling.value;
    navigator.clipboard.writeText(copiedLink);
    setCopied(true)
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-neutral-400 hover:text-neutral-50"
      >
        <svg
          id="shareButton"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            id="shareButton"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </button>
      <div
        id="modalBackdrop"
        onClick={handleOpen}
        className={`${
          open ? "flex" : "hidden"
        }  z-40 fixed bg-neutral-900/50 w-full h-full top-0 left-0 justify-center items-center px-2`}
      >
        <div className="relative p-3 rounded-lg bg-neutral-800 opacity-100 z-50 flex items-center">
          <input
            type="url"
            className="bg-transparent p-1 rounded-lg focus:outline-none focus:bg-neutral-700 mr-4 w-full"
            name="shareLink"
            id="shareLink"
            value={"https://comments.xyz/miguel-estefano/23"}
            readOnly
          />
          <button
            onClick={handleCopy}
            className="text-neutral-400 hover:text-neutral-50 focus:text-neutral-50 peer block"
          >
            <svg
              id="copyButton"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </button>
          <div className={`${copied ? 'block':'hidden'} absolute text-xs p-1 rounded-lg bg-neutral-700 right-3 -bottom-4`}>
            Copied!
          </div>
        </div>
      </div>
    </>
  );
}
