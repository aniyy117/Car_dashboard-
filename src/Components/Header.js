import React from "react";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  return (
    <header className="sticky top-0 w-full z-40 py-3 h-14 bg-red-500 shadow-md overflow-hidden">
      <div className="flex justify-between px-2  text-gray-500">
        <div className="flex flex-shrink-0 justify-between">
          <button
            type="button"
            className="mr-1 focus:outline-none"
            onClick={() => {
              history.push("/");
            }}
          >
            <span className="flex text-2xl subpixel-antialiased font-black leading-none">
              Bidding Dashboard
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
