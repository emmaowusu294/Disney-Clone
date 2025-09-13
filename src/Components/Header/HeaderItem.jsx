import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div
      className="flex text-white items-center gap-1 md:gap-2 text-[16px] md:text-[18px] font-semibold cursor-pointer
    hover:underline underline-offset-8 m-3"
    >
      <Icon />
      <span>{name}</span>
    </div>
  );
}

export default HeaderItem;
