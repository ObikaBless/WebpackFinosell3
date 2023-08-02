import React, { useState, ChangeEvent, FormEvent } from "react";


interface FormData {
  vendorName: string;
  description: string;
  member: string;
  limit: string;
  limitFlexibility: string;
  startDate: string;
  reoccurence: string;
  expDate: string;
  isRestrict: boolean;
  isMerchant: boolean;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    vendorName: "",
    description: "",
    member: "",
    limit: "",
    limitFlexibility: "",
    startDate: "",
    reoccurence: "",
    expDate: "",
    isRestrict: false,
    isMerchant: false,
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission, e.g., submit data to a server or perform other actions
    console.log(formData);
  }; 

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <div className="mt-5 mb-5">
        <label htmlFor="vendor" className="text-secondary font-bold open-sans">Vendor Name:</label> <br />
        <input
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#F0F2F7 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          type="text"
          id="vendor"
          name="vendor"
          value={formData.vendorName}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="description" className="text-secondary font-bold open-sans">Description:</label> <br />
        <textarea
          className="w-2/3 h-32 mt-5 mb-5 text-secondary2 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="member" className="text-secondary font-bold open-sans">Member:</label> <br />
        <select
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          id="member"
          name="member"
          value={formData.member}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="limit" className="text-secondary font-bold open-sans">Limit:</label> <br />
        <input
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          type="text"
          id="limit"
          name="limit"
          value={formData.limit}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="limitFlex" className="text-secondary font-bold open-sans">Limit Flexibility:</label> <br />
        <select
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          id="limitFlex"
          name="limitFlex"
          value={formData.limitFlexibility}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="au">Australia</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="startDate" className="text-secondary font-bold open-sans">Start Date:</label> <br />
        <input
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          type="date"
          id="startDate"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="reoccurence" className="text-secondary font-bold open-sans">
          Reoccurence:
        </label>{" "}
        <br />
        <select
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          id="reoccurence"
          name="reoccurence"
          value={formData.reoccurence}
          onChange={handleChange}
        >
          <option value="">Select a country</option>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
          <option value="uk">United Kingdom</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <div className="mt-5 mb-5">
        <label htmlFor="expDate" className="text-secondary font-bold open-sans">Expiry Date:</label> <br />
        <input
          className="w-2/3 h-19 mt-5 mb-5 border-2 border-#E6EAF2 rounded-b-md rounded-r-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
          type="date"
          id="expDate"
          name="expDate"
          value={formData.expDate}
          onChange={handleChange}
        />
      </div>
      <div className="mt-5 mb-5">
        <label
          htmlFor="isRestrict"
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
        >
          <span className="text-secondary font-bold open-sans">Restrict spending to virtual card</span>
          <p className="text-secondary2 font-semibold">
            Good for recurring payments. This budget can't be spent from a
            physical card or used for reimbursements.
          </p>
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white-600 dark:after:bg-white-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            id="isRestrict"
            name="isRestrict"
            role="switch"
            checked={formData.isRestrict}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="mt-5 mb-5">
        <label
          htmlFor="isMerchant"
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
        >
          <span className="text-secondary font-bold open-sans">Merchant and category restrictions</span> <br />
          <input
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white-600 dark:after:bg-white-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            type="checkbox"
            id="isMerchant"
            name="isMerchant"
            role="switch"
            checked={formData.isMerchant}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* Submit button */}
      <div className="flex justify-center items-center bg-primary w-32 h-14 rounded-b-md rounded-r-md cursor-pointer">
      <button type="submit" className="text-white">Submit</button>
      </div>
    </form>
  );
};

export default Form;
