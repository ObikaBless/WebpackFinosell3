import React from "react";
import { Link } from "react-router-dom";
import { ICONS } from "../../assets/svgs/ICONS";
import Avatar from "../../assets/images/avatar.png";

function Navbar({ pageName }: { pageName: string }) {
  return (
    <nav className="w-full sticky top-0 h-20 px-6 flex items-center justify-between bg-white z-20 shadow">
      <h5 className="font-semibold text-lg">{pageName}</h5>
      <ul className="flex items-center gap-x-3">
        <li>
          <Link to="">
            <span className="px-4 py-4 button-radius flex bg-gray-50 border border-gray-200">
              <ICONS.NotifyBellIcon status={true} />
            </span>
          </Link>
        </li>
        <li>
          <Link
            to=""
            className="flex items-center gap-x-2 bg-gray-50 border border-gray-200 px-4 py-2 button-radius"
          >
            <div>
              <h5 className="font-semibold text-md">Adetunu Timileyin </h5>
              <p className="text-sm -mt-1 font-medium text-gray-500">
                Adesope Finance
              </p>
            </div>
            <span className="button-radius">
              <img src={Avatar} className="button-radius h-8 w-8" alt="" />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
