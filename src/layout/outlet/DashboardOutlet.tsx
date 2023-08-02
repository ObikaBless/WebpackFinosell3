import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DashboardSidebar from "../sidebar/DashboardSidebar";
import Navbar from "../navbar/Navbar";
import toast from "react-hot-toast";

function DashboardOutlet({ isAuthorized }: { isAuthorized: boolean | string }) {
  const [pageName, setPageName] = React.useState("Home");
  const navigateTo = useNavigate();
  React.useEffect(() => {
    document.querySelector(".main-wrapper")?.classList.add("animte-slide-up");
    setTimeout(() => {
      document
        .querySelector(".main-wrapper")
        ?.classList.remove("animte-slide-up");
    }, 300);
    // Redirect when not authorized
    if (isAuthorized===false && typeof isAuthorized === "boolean") {
      navigateTo("/login");
      toast.error("User not authorized");
    }
    // ******
    return () => {
      document
        .querySelector(".main-wrapper")
        ?.classList.remove("animte-slide-up");
    };
  }, [pageName, isAuthorized, navigateTo]);

  return (
    <div className="bg-[#FAFAFA] flex items-start">
      <DashboardSidebar />
      <div className="w-[calc(100%_-_248px)]">
        <Navbar pageName={pageName} />
        <div className="w-full p-6">
          <div className="main-wrapper bg-white w-full h-auto rounded-xl px-7 py-8">
            <Outlet context={[setPageName]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOutlet;
