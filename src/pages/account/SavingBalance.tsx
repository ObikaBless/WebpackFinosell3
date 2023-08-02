import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";
import AccountCard from "./AccountCard";

function SavingBalance() {
  const [accountData] = React.useState([
    {
      title: "Main Account",
      accountName: "Oreofe Ventures",
      accountNumber: "1234567890",
      bankName: "Polaris Bank",
    },
    {
      title: "Sub Account",
      accountName: "Oreofe Ventures 2",
      accountNumber: "0123456789",
      bankName: "EcoBank",
    },
  ]);
  return (
    <div>
      <div className="balance my-8">
        <h4 className="text-5xl font-bold text-black">
          <span className="font-normal text-2xl text-gray-500">₦</span>267,974
          <span className="font-normal text-2xl text-gray-500">.64</span>
        </h4>
      </div>
      <div className="w-full grid grid-cols-2">
        <div className="w-2/3 flex flex-col ...">
          {accountData.map(
            ({ accountName, accountNumber, bankName, title }, id) => (
              <AccountCard
                title={title}
                accountName={accountName}
                accountNumber={accountNumber}
                bankName={bankName}
                key={id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default SavingBalance;
