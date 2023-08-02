import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";
import toast from "react-hot-toast";

function AccountCard({
  accountNumber,
  accountName,
  bankName,
  title,
}: {
  accountNumber: string;
  accountName: string;
  bankName: string;
  title: string;
}) {
  const copyToClipboard = (value: string) => {
    toast("Copied");
    window.navigator.clipboard.writeText(value);
  };
  return (
    <React.Fragment>
      <h5 className="text-md text-gray-500 font-medium my-2.5">{title}</h5>
      <div className="relative mb-5 w-full h-56 card-radius border border-primary">
        <div className="w-full px-8 pt-4">
          <div className="flex h-11 items-center justify-between">
            <p className="text-gray-500 text-md font-medium">Account Number</p>
            <p className="text-black text-md font-semibold">{accountNumber}</p>
          </div>
          <div className="flex h-11 items-center justify-between">
            <p className="text-gray-500 text-md font-medium">Account Name</p>
            <p className="text-black text-md font-semibold">{accountName}</p>
          </div>
          <div className="flex h-11 items-center justify-between">
            <p className="text-gray-500 text-md font-medium">Bank Name</p>
            <p className="text-black text-md font-semibold">{bankName}</p>
          </div>
        </div>
        <button
          onClick={() => copyToClipboard(accountNumber)}
          className="bg-secondary flex-center gap-x-2 rounded-xl rounded-tl-none rounded-tr-none absolute bottom-0 left-0 w-full h-14"
        >
          <p className="text-white font-medium text-md">Copy Account Number</p>
          <ICONS.CopyIcon />
        </button>
      </div>
    </React.Fragment>
  );
}

export default AccountCard;
