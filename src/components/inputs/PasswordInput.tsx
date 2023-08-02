import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";

interface Input {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function PasswordInput({ onChange, value }: Input) {
  const [inputType, setInputType] = React.useState("password");
  const toggleInputType = () => {
    const type = inputType === "password" ? "text" : "password";
    setInputType(type);
  };
  return (
    <div>
      <label htmlFor="">Password</label>
      <div className="w-full relative">
        <input
          required
          value={value}
          placeholder="Enter your password"
          type={inputType}
          name="password"
          onChange={onChange}
          className="h-[64px] w-full input-radius pl-14 outline-none border border-[#D9D9D9] invalid:border-[#D9D9D9] valid:border-primary focus:border-primary bg-transparent focus:bg-[#FAFAFA] duration-300"
        />
        <span className="absolute top-6 left-6">
          <ICONS.LockIcon />
        </span>
        <button onClick={toggleInputType} className="absolute top-6 right-6">
          <ICONS.EyeIcon
            stroke={inputType === "text" ? "#AAAAAA" : "#273B4A"}
            fill={inputType === "text" ? "#AAAAAA" : "#273B4A"}
          />
        </button>
      </div>
    </div>
  );
}

export default PasswordInput;
