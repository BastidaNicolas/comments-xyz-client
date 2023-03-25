'use client';
import Image from "next/image";
import { useState } from "react";

export default function UserForm() {
    
    const [profileImage, setProfileImage] = useState<string>('https://i.imgur.com/Bg8VuLj.png');

    return (
        <form className="max-w-sm m-auto bg-neutral-800 pt-6 px-4 pb-2 rounded-lg">
            <div className="w-20 h-20 m-auto mb-3">
                <Image className="rounded-full w-20 h-20 object-cover" src={profileImage} alt="user profile image" width={80} height={80} ></Image>
            </div>
            <div className="flex flex-col mb-3" >
                <label htmlFor="usernameInput">Username</label>
                <input className="p-1 px-2 rounded-lg border-b border-neutral-500 bg-transparent focus:bg-neutral-700 focus:outline-none focus:text-neutral-50 text-neutral-400" type="text" name="usernameInput" id="usernameInput" />
            </div>
            <div className="flex flex-col mb-3">
                <label htmlFor="imageUrlInput">Image Url</label>
                <input className="p-1 px-2 rounded-lg border-b border-neutral-500 bg-transparent focus:bg-neutral-700 focus:outline-none focus:text-neutral-50 text-neutral-400" type="text" name="imageUrlInput" id="imageUrlInput" value={profileImage} onChange={(e) => setProfileImage(e.target.value)}/>
            </div>
            <div className="flex flex-col mb-6">
                <label htmlFor="aboutText">About</label>
                <textarea className="resize-none p-1 px-2 rounded-lg border-b border-neutral-500 bg-transparent focus:bg-neutral-700 focus:outline-none focus:text-neutral-50 text-neutral-400" name="aboutText" id="aboutText" cols={30} rows={10}></textarea>
            </div>
            <button type="submit" className="text-sm font-bold bg-fuchsia-600 hover:bg-fuchsia-500 hover:cursor-pointer p-1 md:px-2 md:py-1 rounded-lg peer-focus-within:self-end focus:self-end">Save</button>
        </form>
    );
  }
  