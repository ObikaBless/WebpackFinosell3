import React from "react";
import ActionButton from "../../../components/buttons/ActionButton";
import { ICONS } from "../../../assets/svgs/ICONS";
type Info = {
  accountType: string;
  accountNumber: string;
  accountName: string;
  bank: string;
};

function AccountInfo({ accountName, accountNumber, bank, accountType }: Info) {
  return (
    <div className="w-80 ">
      <p className="mb-1 text-sm opacity-70">{accountType}</p>

      <div className="border border-b-0 border-opacity-50 border-primary rounded-tr-lg">
        <div className="grid grid-cols-2 px-3 gap-y-4  py-4 text-sm">
          <p className="opacity-70 text-sm">Account Number</p>
          <p className="font-semibold text-secondary text-right">
            {accountNumber}
          </p>
          <p className="opacity-70 text-sm">Account Name</p>
          <p className="font-semibold text-secondary text-right">
            {accountName}
          </p>
          <p className="opacity-70 text-sm">Bank</p>
          <p className="font-semibold text-secondary text-right">{bank}</p>
        </div>
        {/* <div className="bg-black py-2 px-3">
          <ICONS.CopyIcon />
        </div> */}
      </div>
      <ActionButton
        className="bg-secondary w-full text-sm py-4 text-white flex items-center justify-center gap-3  rounded-br-lg rounded-bl-lg"
        text="Copy Account Number"
        Icon={<ICONS.CopyIcon />}
      />
    </div>
  );
}

export default AccountInfo;
