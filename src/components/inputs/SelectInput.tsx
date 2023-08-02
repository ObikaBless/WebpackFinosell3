import React from "react";

interface Input {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  name: string;
  type?: string;
}
function ApSelectInput({ onChange, value, name, label, type }: Input) {
  return (
    <div className="w-full my-4">
      <label className="font-semibold text-sm py-2" htmlFor={name}>
        {label}
      </label>
      <div className="w-full relative">
        <select
          name={name}
          id=""
          onChange={onChange}
          className="h-[64px] w-full input-radius px-8 outline-none border border-[#D9D9D9] invalid:border-[#D9D9D9] valid:border-primary focus:border-primary bg-transparent focus:bg-[#FAFAFA] duration-300"
        >
          <option value="" className="text-sm opacity-70">
            Select Benficiary
          </option>
        </select>
      </div>
    </div>
  );
}

export default ApSelectInput;
