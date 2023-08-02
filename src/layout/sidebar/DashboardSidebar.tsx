import React from "react";
import { ICONS } from "../../assets/svgs/ICONS";
import Logo from "../../assets/svgs/dashboard-logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function DashboardSidebar() {
  const [sideMenu] = React.useState([
    { Icon: ICONS.HomeIcon, text: "Account", href: "" },
    { Icon: ICONS.FinanceIcon, text: "Finance", href: "#/finance" },
    { Icon: ICONS.BudgetIcon, text: "Budget", href: "/budget" },
    { Icon: ICONS.ReferIcon, text: "Refer & Reward", href: "#/reward" },
    { Icon: ICONS.HelpIcon, text: "Help", href: "#/help" },
    { Icon: ICONS.LogoutIcon, text: "Logout", href: "#logout" },
    // { Icon: ICONS.HomeIcon, text: "Home", href: "" },
  ]);
  const location = useLocation();
  const navigateTo = useNavigate();

  const handleLogout = () => {
    window.sessionStorage.clear();
    const t = toast.loading("Login out");
    toast.dismiss(t);
    toast.success("Logout Successfully");
    navigateTo("/login");
    window.location.href = "/login";
  };

  return (
    <div className="w-[248px] sticky top-0 flex flex-col justify-between pl-[48px] pr-[36px] pt-[48px] pb-[56px] h-screen bg-white border-r border-gray-200">
      <div className="sidebar w-full">
        <nav className="h-20 flex items-center mb-5">
          <img src={Logo} alt="" />
          <p className="font-semibold ml-2.5 mr-3">Hello Oreofe</p>
          <ICONS.CaretDownIcon fill="#000000" />
        </nav>
        <ul className="flex flex-col items-start gap-y-[40px]">
          {sideMenu.map(({ Icon, text, href }, id) => (
            <Link
              key={id}
              onClick={() => href === "#logout" && handleLogout()}
              to={href !== "#logout" ? `/dashboard${href}` : href}
              className="flex items-center gap-x-2.5"
            >
              <Icon
                color={
                  location.pathname === `/dashboard${href}`
                    ? "#000000"
                    : "#999999"
                }
              />{" "}
              <p
                className={`text-[16px] mt-1 font-semibold ${
                  location.pathname === `/dashboard${href}`
                    ? "text-[#000000]"
                    : "text-[#999999]"
                }`}
              >
                {text}
              </p>
            </Link>
          ))}
        </ul>
      </div>

      <footer>
        <ICONS.BrandLogo />
      </footer>
    </div>
  );
}

export default DashboardSidebar;
