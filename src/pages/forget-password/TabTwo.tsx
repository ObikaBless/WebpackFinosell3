import React from "react";
import { Link } from "react-router-dom";
import OTPInput from "../../components/inputs/OtpInput";
import useCountdownTimer from "../../hooks/useCountdownTimer";
import toast from "react-hot-toast";
import LabelButton from "../../components/buttons/LabelButton";

interface ITabTwo {
  forgetPwdPayload: any;
  handleOtpChange: (value: string) => void;
  isLoading: boolean;
  handleNextTab: () => void;
}
function TabTwo({
  handleOtpChange,
}: ITabTwo) {

  const [time, setTime] = React.useState(1);
  const counterFormatter = `${Math.floor(useCountdownTimer(time) / 60)}:${
    useCountdownTimer(time) % 60
  }`;

  React.useEffect(() => {}, []);

  const handleOTPresend = () => {
    toast.success("OTP resent");
    setTime(1);
  };
  return (
    <React.Fragment>
      <div className="title mt-6 flex-center flex-col">
        <h3 className="text-4xl text-secondary font-bold">Enter OTP</h3>
        <p className="w-2/3 px-2 text-center mt-1 text-md text-[#8C8C8C] font-medium ...">
          Enter the OTP sent to your email address
        </p>
      </div>

      <div className="input-container w-full mt-16">
        <div className="input-wrapper">
          <OTPInput handleOtpChange={handleOtpChange} length={4} />
          <div className="count-down mt-5 flex justify-center">
            {counterFormatter === "0:0" ? (
              <button
                onClick={handleOTPresend}
                className="text-md font-semibold text-primary"
              >
                Resend OTP
              </button>
            ) : (
              <p>
                Resend SMS <span>{counterFormatter}</span>
              </p>
            )}
          </div>
        </div>
        <div className="button-wrapper mt-12 mb-12">
          <LabelButton />
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

export default TabTwo;
