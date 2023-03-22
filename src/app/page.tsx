import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import UserCard from "@/components/userCard";
import ScoreCard from "@/components/scoreCard";
import Searchbar from "@/components/searchbar";
import UserAbout from "@/components/userAbout";
import UserMenu from "@/components/userMenu";
import ConnectButton from "@/components/connectButton";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto min-h-screen pb-28">
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded">
        <h1 className="text-2xl font-bold">Project's Components</h1>
      </div>
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded">
        <h2 className="text-xl font-bold border-b-2 mb-5">User Card</h2>
        <UserCard />
      </div>
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded">
        <h2 className="text-xl font-bold border-b-2 mb-5">Score Card</h2>
        {/*ScoreCard always tries to be 100% width*/}
        <div className="max-w-[242px]">
          <ScoreCard>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </ScoreCard>
        </div>
      </div>
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded min-h-[17rem]">
        <h2 className="text-xl font-bold border-b-2 mb-5">Searchbar</h2>
        {/* searchbar has UserCard as dependency */}
        <Searchbar />
      </div>
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded">
        <h2 className="text-xl font-bold border-b-2 mb-5">User about</h2>
        <div className="max-w-lg">
          <UserAbout />
        </div>
      </div>
      <div className="relative bg-zinc-900 py-3 px-5 my-2 rounded min-h-[16rem]">
        <h2 className="text-xl font-bold border-b-2 mb-5">User menu</h2>
        <UserMenu/>
        <br/>
        <ConnectButton/> 
      </div>
    </div>
  );
}
