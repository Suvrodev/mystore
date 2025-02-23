import { useState } from "react";
import MobileHeaderOption from "./MobileHeaderOption";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="  w-full  flex justify-between items-center py-5 px-5 bg-blue-600 relative z-20">
        <div className="flex items-center justify-start gap-x-2">
          <h1 className="font-bold">My Store</h1>
        </div>
        <div className="">
          <div
            className={`menu-icon ${isOpen ? "open" : ""}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div
        className={`absolute  w-full transition-all duration-700 ${
          isOpen ? "top-[62px]" : "-top-[400px] "
        }`}
      >
        <MobileHeaderOption handleClick={handleClick} />
      </div>
    </div>
  );
};

export default MobileHeader;
