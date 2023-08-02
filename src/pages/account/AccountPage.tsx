import React, { useState } from "react";
import ActionButton from "../../components/buttons/ActionButton";
import AccountInfo from "./components/AccountInfo";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Switch,
} from "@mui/material";
import ApModal from "../../components/modal/modal";
import { ICONS } from "../../assets/svgs/ICONS";
import TextInput from "../../components/inputs/TextInput";
import FormButton from "../../components/buttons/FormButton";
import ApSelectInput from "../../components/inputs/SelectInput";

function AccountPage() {
  const [balanceToShow, setBalanceToShow] = useState<"total" | "wallet">(
    "total"
  );
  const [modal, setModal] = useState<{
    show: boolean;
    type?: "transfer" | "send1" | "send2" | "confirm" | "password";
  }>({
    show: false,
  });

  // const walletBalance = 333800.69;
  // const totalBalance = 1333800.69;

  return (
    <div className="flex">
      <div className="w-1/2 pb-4">
        <div className="flex gap-2 ">
          <ActionButton
            text="Total Balance"
            onClick={() => setBalanceToShow("total")}
            className={`font-semibold px-3 py-1 ${
              balanceToShow === "total" &&
              "bg-primary text-white rounded-tr-lg rounded-br-lg rounded-bl-lg"
            }`}
          />
          <ActionButton
            text="Wallet Balance"
            onClick={() => setBalanceToShow("wallet")}
            className={`font-semibold px-3 py-1 ${
              balanceToShow === "wallet" &&
              "bg-primary text-white rounded-tr-lg rounded-br-lg rounded-bl-lg"
            }`}
          />
        </div>
        <p className="font-semibold text-secondary text-4xl my-2">316,800</p>
        <AccountInfo
          accountName="Oreofe Ventures"
          accountNumber="0123423424"
          accountType="Main Account"
          bank="Polaris Bank"
        />
        <br />
        <AccountInfo
          accountName="Oreofe Ventures"
          accountNumber="0123423424"
          accountType="Sub Account"
          bank="Polaris Bank"
        />

        <div
          onClick={() => setModal({ show: true, type: "transfer" })}
          className="px-4 flex gap-4 py-4 border-gray-500 border-opacity-40 border w-80  rounded-tr-lg rounded-br-lg rounded-bl-lg mt-8 cursor-pointer"
        >
          <ICONS.AddMoneyIcon />
          <div>
            <p className="font-semibold text-secondary">Add Money</p>
            <p className="text-sm pb-1 opacity-70">Space for subtitle</p>
          </div>
        </div>
        <div
          onClick={() => setModal({ show: true, type: "send1" })}
          className="px-4 flex gap-4 py-4 border-gray-500 border-opacity-40 border w-80  rounded-tr-lg rounded-br-lg rounded-bl-lg mt-4 cursor-pointer"
        >
          <ICONS.SendMoneyIcon />

          <div>
            <p className="font-semibold text-secondary">Send Money</p>
            <p className="text-sm pb-1 opacity-70">Space for subtitle</p>
          </div>
        </div>
      </div>

      <div className="w-1/2 ">
        <div className="flex justify-between items-center">
          <p className="text-sm opacity-70">Store Metrics</p>
          <FormControl className="text-sm">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="today"
                control={<Radio />}
                label="Today"
              />
              <FormControlLabel
                value="month"
                control={<Radio />}
                label="This Month"
              />
              <FormControlLabel
                value="year"
                control={<Radio />}
                label="This Year"
              />
              <FormControlLabel value="all" control={<Radio />} label="All" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="border-gray-500 border-opacity-40 border">
          <div className="grid grid-cols-2">
            <div className="py-4 px-8 border-r border-gray-500 border-opacity-40">
              <p className="text-sm pb-1 opacity-70">Total Spending</p>
              <p className="text-secondary font-bold text-xl">₦213,660.90</p>
            </div>
            <div className="py-4 px-8 ">
              <p className="text-sm pb-1 opacity-70">Total Sales</p>
              <p className="text-secondary font-bold text-xl">₦213,660.90</p>
            </div>
            <div className="py-4 px-8 border-t border-b border-r border-opacity-40 border-gray-500 ">
              <p className="text-sm pb-1 opacity-70">Number of Sales</p>
              <p className="text-secondary font-bold text-xl">4923</p>
            </div>
            <div className="py-4 px-8 border-t border-b border-opacity-40 border-gray-500 ">
              <p className="text-sm pb-1 opacity-70">Product Impression</p>
              <p className="text-secondary font-bold text-xl">103,660.90</p>
            </div>
          </div>

          <p className="text-secondary px-8 font-bold">Cash inflow</p>
        </div>
      </div>

      <ApModal
        title="Add Money"
        open={modal.show && modal.type === "transfer"}
        onDismiss={() => setModal({ show: false })}
        className="flex items-center justify-center border-none outline-none"
      >
        <div>
          <TextInput
            label="Amount"
            name="amount"
            onChange={() => {}}
            placeHolder="₦0.00"
            value=""
          />
          <TextInput
            label="Card Number"
            name="cardNumber"
            onChange={() => {}}
            placeHolder="0000 0000 0000 0000"
            value=""
          />

          <div className="grid grid-cols-2 gap-4">
            <TextInput
              label="Valid Till"
              name="validTill"
              onChange={() => {}}
              placeHolder="MM/YY"
              value=""
            />
            <TextInput
              label="CVV"
              name="cvv"
              onChange={() => {}}
              placeHolder="123"
              value=""
            />
          </div>

          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">Save this card</p>
            <Switch />
          </div>

          <FormButton isLoading={false} onClick={() => {}} text="Add Money" />
        </div>
      </ApModal>
      <ApModal
        title="Send Money"
        open={modal.show && modal.type === "send1"}
        onDismiss={() => setModal({ show: false })}
        className="flex items-center justify-center border-none outline-none"
      >
        <div>
          <ApSelectInput
            name="beneficiary"
            onChange={() => {}}
            value=""
            label="Select Beneficiary"
          />
          <TextInput
            label="Account Number"
            name="accountNumber"
            onChange={() => {}}
            placeHolder="0123456789"
            value=""
            type="number"
          />

          <ApSelectInput
            name="beneficiary"
            onChange={() => {}}
            value=""
            label="Select Beneficiary"
          />

          <FormButton
            isLoading={false}
            onClick={() => {
              setModal({ show: true, type: "send2" });
            }}
            text="Continue"
          />
        </div>
      </ApModal>
      <ApModal
        title="Send Money"
        open={modal.show && modal.type === "send2"}
        onDismiss={() => setModal({ show: false })}
        className="flex items-center justify-center border-none outline-none"
      >
        <div>
          <div className="h-[64px] w-full  border border-[#D9D9D9] flex items-center rounded-tr-lg rounded-br-lg rounded-bl-lg px-8 text-sm">
            <p className="font-semibold ">Account Name</p>
          </div>
          <TextInput
            label="Amount"
            name="accountNumber"
            onChange={() => {}}
            placeHolder="₦0.00"
            value=""
            type="number"
          />
          <TextInput
            label="Description"
            name="accountNumber"
            onChange={() => {}}
            placeHolder="What is this for?"
            value=""
          />
          <p className="font-semibold text-sm mb-8">+ ₦50 transaction charge</p>

          <FormButton
            isLoading={false}
            onClick={() => {
              setModal({ show: true, type: "confirm" });
            }}
            text="Continue"
          />
        </div>
      </ApModal>
      <ApModal
        title="Send Money"
        open={modal.show && modal.type === "password"}
        onDismiss={() => setModal({ show: false })}
        className="flex items-center justify-center border-none outline-none"
      >
        <div>
          <div className="h-[64px] w-full  border border-[#D9D9D9] flex items-center rounded-tr-lg rounded-br-lg rounded-bl-lg px-8 text-sm">
            <p className="font-semibold ">Account Name</p>
          </div>
          <TextInput
            label="Amount"
            name="accountNumber"
            onChange={() => {}}
            placeHolder="₦0.00"
            value=""
            type="number"
          />
          <TextInput
            label="Description"
            name="accountNumber"
            onChange={() => {}}
            placeHolder="What is this for?"
            value=""
          />
          <p className="font-semibold text-sm mb-8">+ ₦50 transaction charge</p>

          <FormButton
            isLoading={false}
            onClick={() => {
              setModal({ show: true, type: "confirm" });
            }}
            text="send"
          />
        </div>
      </ApModal>
    </div>
  );
}

export default AccountPage;
