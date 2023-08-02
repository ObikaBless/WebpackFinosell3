import React from "react";

interface Input {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeHolder: string;
  name: string;
  type?: string;
}
function TextInput({ onChange, value, name, label, placeHolder, type }: Input) {
  return (
    <div className="w-full my-4">
      <label className="font-semibold text-sm py-2" htmlFor={name}>
        {label}
      </label>
      <div className="w-full relative">
        <input
          required
          value={value}
          placeholder={placeHolder}
          type={type || "text"}
          name={name}
          onChange={onChange}
          className="h-[64px] w-full input-radius pl-8 outline-none border border-[#D9D9D9] invalid:border-[#D9D9D9] valid:border-primary focus:border-primary bg-transparent focus:bg-[#FAFAFA] duration-300"
        />
      </div>
    </div>
  );
}

export default TextInput;
