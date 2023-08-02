import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";
import MobileInput from "../../components/inputs/MobileInput";
import toast from "react-hot-toast";
import PasswordInput from "../../components/inputs/PasswordInput";
import FormButton from "../../components/buttons/FormButton";
import { Link, useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/requests/onboard-user/LoginRequest";
interface Payload {
  phonenumber: string;
  password: string;
}
function LoginPage() {
  const navigateTo = useNavigate();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loginPayload, setLoginPayload] = React.useState<Payload>({
    phonenumber: "2348026136865",
    password: "Goodboy2017!",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    // console.log(type);
    switch (name) {
      case "phonenumber":
        const mobilePattern = /^[\d]+$/;
        const isFirstDigitZero = value.slice(0, 1) === "0";
        const stripFirstZero = value.slice(1, value.length);
        const first3Digit = value.slice(0, 3);
        if (mobilePattern.test(value) || value === "") {
          if (isFirstDigitZero) {
            setLoginPayload({
              ...loginPayload,
              [name]: `234${stripFirstZero}`,
            });
          } else if ("234".includes(first3Digit)) {
            setLoginPayload({
              ...loginPayload,
              [name]: value,
            });
          } else {
            toast("Please enter a valid phone number starting with 234");
          }
        } else {
          toast("Input type not supported");
        }
        break;
      default:
        setLoginPayload({
          ...loginPayload,
          [name]: value,
        });
        break;
    }
  };

  const handleSubmit = async () => {
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!loginPayload.phonenumber) {
      toast.error("Phone number is required");
    } else if (!loginPayload.password) {
      toast.error("Password is required");
    } else if (!passwordPattern.test(loginPayload.password)) {
      toast.error(
        "Password must be 8 characters long, including 1 uppercase letter, 1 lowercase letter, and 1 symbol"
      );
    } else {
      setIsLoading(true);
      const responseData = await loginRequest(loginPayload);
      if (responseData?.code >= 200 && responseData?.code <= 204) {
        toast.success("Login Successfully");
        const token = responseData.token;
        const userData = responseData.message;
        window.sessionStorage.setItem("data", JSON.stringify(userData));
        window.sessionStorage.setItem("token", token);
        navigateTo("/dashboard");
        window.location.href = "/dashboard";
      } else {
        const { response } = responseData;
        toast.error(response.data.error);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-secondary flex-center">
      <div className="w-[703px] px-20 py-12 _h-[812px] login-box-radius bg-gray-100 rounded-2.5xl rounded-tl-none flex-center flex-col">
        <div className="top-section flex-center">
          <ICONS.BrandLogo />
        </div>
        <div className="title mt-6 flex-center flex-col">
          <h3 className="text-4xl text-secondary font-bold">Welcome back</h3>
          <p className="mt-1 text-md text-[#8C8C8C] font-medium">
            Enter your login details
          </p>
        </div>

        <div className="input-container w-full mt-16">
          <div className="input-wrapper">
            <MobileInput
              value={loginPayload.phonenumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper mt-5">
            <PasswordInput
              value={loginPayload.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="button-wrapper mt-12">
            <FormButton
              text="Login"
              isLoading={isLoading}
              onClick={handleSubmit}
            />
          </div>
          <div className="label-wrapper mt-5 flex-center">
            <Link
              to={"/forget-password"}
              className="text-primary font-semibold text-md"
            >
              Forget Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
