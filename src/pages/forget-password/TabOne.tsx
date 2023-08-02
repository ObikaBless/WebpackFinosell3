import React from "react";
import { Link } from "react-router-dom";
import FormButton from "../../components/buttons/FormButton";
import EmailInput from "../../components/inputs/EmailInput";

interface ITabOne {
  forgetPwdPayload: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  handleNextTab: () => void;
}
function TabOne({
  forgetPwdPayload,
  handleInputChange,
  isLoading,
  handleNextTab,
}: ITabOne) {
  return (
    <React.Fragment>
      <div className="title mt-6 flex-center flex-col">
        <h3 className="text-4xl text-secondary font-bold">Forgot Password</h3>
        <p className="w-2/3 px-2 text-center mt-1 text-md text-[#8C8C8C] font-medium ...">
          Enter your email address and we’ll email you a code to use to reset
          your passcode
        </p>
      </div>

      <div className="input-container w-full mt-16">
        <div className="input-wrapper">
          <EmailInput name="email"
            value={forgetPwdPayload.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="button-wrapper mt-12">
          <FormButton
            text="Continue"
            isLoading={isLoading}
            onClick={handleNextTab}
          />
        </div>
        <div className="label-wrapper mt-5 flex-center">
          <Link to={"/login"} className="text-primary font-semibold text-md">
            Already have account? login
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TabOne;
