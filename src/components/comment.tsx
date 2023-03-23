import ContributionButton from "./contributionButton";
import DeleteButton from "./deleteButton";
import ShareButton from "./shareButton";

export default function Comment() {
  return (
    <div className="border-b border-neutral-600 p-2.5">
      <div className="flex justify-between">
        <div className="flex">
          <ContributionButton/>
          <ShareButton/>
        </div>
        <DeleteButton/>
      </div>
    </div>
  );
}
