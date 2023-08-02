import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
interface Payload {
  email: string;
  otp: string;
}
function ForgetPwdPage() {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [forgetPwdPayload, setForgetPwdPayload] = React.useState<Payload>({
    email: "",
    otp: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForgetPwdPayload({
      ...forgetPwdPayload,
      [name]: value,
    });
  };

  const handleOtpChange = (value: string) => {
    setForgetPwdPayload({
      ...forgetPwdPayload,
      otp: value,
    });
  };

  // const handleSubmit = () => {
  //   setIsLoading(true);

  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000);
  // };

  const handleNextTab = () => {
    setIsLoading(true);

    setTimeout(() => {
      setActiveTab((prevTabId) => prevTabId + 1);
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div className="w-full h-screen bg-[#FAFAFA] flex-center">
      <div className="w-[703px] px-20 py-12 _h-[812px] login-box-radius bg-white border border-gray-100 rounded-2.5xl rounded-tl-none flex-center flex-col">
        <div className="top-section flex-center">
          <ICONS.BrandLogo />
        </div>
        {activeTab === 0 && (
          <TabOne
            forgetPwdPayload={forgetPwdPayload}
            handleInputChange={handleInputChange}
            handleNextTab={handleNextTab}
            isLoading={isLoading}
          />
        )}
        {activeTab === 1 && (
          <TabTwo
            forgetPwdPayload={forgetPwdPayload}
            handleOtpChange={handleOtpChange}
            handleNextTab={handleNextTab}
            isLoading={isLoading}
          />
        )}
      </div>
    </div>
  );
}

export default ForgetPwdPage;
