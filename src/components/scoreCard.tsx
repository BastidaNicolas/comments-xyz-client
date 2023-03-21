import { ReactNode } from "react";

export default function ScoreCard({ children }: {children: ReactNode}) {
    return (
        <div className="p-3.5 bg-neutral-800 rounded-lg">
            <div className="text-base font-bold mb-2 truncate" >Top Earning User</div>
            {children}
        </div>
    );
  }
  