import React, { useState } from "react";
import logo from "../../assets/Images/logo.png";

import menu from "./menu";
import HeaderItem from "./HeaderItem";
import { HiPlus, HiDotsVertical } from "react-icons/hi";

function Header() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between p-3 md:p-6 bg-blue-500 md:bg-red-500 lg:bg-green-500">
      <div className="flex items-center gap-3 md:gap-6">
        <img
          src={logo}
          alt="Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex items-center  gap-3 md:gap-6">
          {menu.map((item) => (
            <HeaderItem name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* duplicate */}
        <div className="flex items-center  gap-1 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem name={""} Icon={item.icon} />
          )}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute left-45 mt-5 bg-[#121212]
            border-[1px] border-gray-700 p-2 px-5 py-3 rounded-b-2xl"
              >
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem name={item.name} Icon={item.icon} />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
