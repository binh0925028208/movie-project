import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";
import { menu } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleToggle = (index) => {
    setActiveIndex(index);
  };

  const toggleCollapse = () => {
    setActiveIndex(null);
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`transition-all duration-300 ${
        isCollapsed ? "w-20" : "lg:w-1/6"
      } bg-gray-200 p-4 flex-shrink-0`}
    >
      <div
        className={`flex items-center justify-${
          isCollapsed ? "center" : "start"
        } gap-2 mb-4`}
      >
        <button onClick={toggleCollapse}>
          <IoMenu />
        </button>
        {!isCollapsed && <p>MovieNew</p>}
      </div>
      <ul className={`${!isCollapsed ? "" : "max-md:hidden"}`}>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`flex flex-col ${
              isCollapsed ? "items-center" : "items-start"
            } gap-2 mb-2 cursor-pointer p-2 w-full ${
              activeIndex === index ? "bg-gray-400" : "bg-[#3fa1ec]"
            }`}
            onClick={() => handleToggle(index)}
          >
            <div
              className={`flex items-center justify-between w-full ${
                isCollapsed ? "justify-center" : "justify-start"
              }`}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                {!isCollapsed && <p>{item.title}</p>}
              </div>
              {!isCollapsed &&
                (activeIndex === index ? (
                  <IoMdArrowDropdown />
                ) : (
                  <IoMdArrowDropright />
                ))}
            </div>
            {activeIndex === index && (
              <div className={`flex flex-col gap-2 mt-2 w-full`}>
                {item.items.map((e, subIndex) => (
                  <div
                    key={subIndex}
                    className="bg-gray-300 p-2 w-full"
                    onClick={() => navigate(e.path)}
                  >
                    {e.title}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;
