import { navLinks } from "../../../../Array/HeaderArray";
import "./MobileHeader.css";
import { Link, useLocation } from "react-router";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MobileHeaderOption = ({ handleClick }: any) => {
  const loc = useLocation()?.pathname;
  return (
    <div className=" bg-blue-500 text-white flex flex-col gap-4 px-5 py-5 relative z-10">
      <div className="flex flex-col gap-4 font-bold w-full ">
        {navLinks.map((data, idx) => (
          <Link to={data?.to} key={idx} className="relative">
            {data?.label}
            <span
              onClick={() => handleClick(false)}
              className={`h-[2px] w-1/2 absolute -bottom-1 left-0 ${
                loc === data?.to ? " bg-white" : ""
              }`}
            ></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileHeaderOption;
