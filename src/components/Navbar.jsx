import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-screen-xl mx-auto w-full py-4 flex justify-between items-center  max-sm:px-2 ">
      <div className="flex items-center gap-1">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-6 h-6 max-sm:w-4 max-sm:h-4"
        />
        <span className="text-xl font-bold max-sm:text-sm">SMALLS</span>
      </div>

      <div className="flex items-center gap-6 max-sm:gap-2">
        {[
          { text: "Fav", count: 2 },
          { text: "Cart", count: 1 },
          { text: "Login" },
        ].map((item, index) => (
          <button
            key={index}
            className="opacity-80 hover:opacity-100 hover:scale-110 transition-all text-sm max-sm:text-xs"
          >
            {item.text}
            {item.count && <span className="ml-1">({item.count})</span>}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
