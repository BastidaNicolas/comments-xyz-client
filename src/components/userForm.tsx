'use client';
import Image from "next/image";
import { useState } from "react";

export default function UserForm() {
    
    const [profileImage, setProfileImage] = useState<string>('https://i.imgur.com/fPIhmeG.jpg');

    return (
        <form className="">
            <div className="w-20 h-20">
                <Image className="rounded-full w-20 h-20 object-cover" src={profileImage} alt="user profile image" width={80} height={80} ></Image>
            </div>
            <div>
                <label htmlFor="usernameInput">Username</label>
                <input type="text" name="usernameInput" id="usernameInput" />
            </div>
            <div>
                <label htmlFor="imageUrlInput">Image Url</label>
                <input type="text" name="imageUrlInput" id="imageUrlInput" value={profileImage} onChange={(e) => setProfileImage(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="aboutText">About</label>
                <textarea name="aboutText" id="aboutText" cols={30} rows={10}></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
    );
  }
  