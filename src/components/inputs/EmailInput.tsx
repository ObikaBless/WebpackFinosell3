import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";

interface Input {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
function EmailInput({ onChange, value, name = "email" }: Input) {
  return (
    <div>
      <label htmlFor="">Email address</label>
      <div className="w-full relative">
        <input
          required
          value={value}
          placeholder="Enter your email address"
          type="text"
          name={name}
          onChange={onChange}
          className="h-[64px] w-full input-radius pl-14 outline-none border border-[#D9D9D9] invalid:border-[#D9D9D9] valid:border-primary focus:border-primary bg-transparent focus:bg-[#FAFAFA] duration-300"
        />
        <span className="absolute top-6 left-6">
          <ICONS.EmailIcon />
        </span>
      </div>
    </div>
  );
}

export default EmailInput;
