export default function ScoreCard({children}:any) {
    return (
        <div className="p-3.5 bg-neutral-800 rounded-lg">
            <div className="text-base font-bold mb-2 truncate" >Top Earning User</div>
            {children}
        </div>
    );
  }
  