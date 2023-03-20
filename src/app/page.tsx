import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import UserCard from "@/components/userCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded">
        <h1 className="text-2xl font-bold">Project's Components</h1>
      </div>
      <div className="bg-zinc-900 py-3 px-5 my-2 rounded">
        <h2 className="text-xl font-bold border-b-2 mb-5">User Card</h2>
        <UserCard/>
      </div>
    </div>
  );
}
