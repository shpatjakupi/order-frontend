import React from "react";


const Nav = () => {
  const onPress = (e) => {
    e.preventDefault();
    const target = window.document.getElementById(
      e.currentTarget.href.split("#")[1]
    );
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white sticky mt-10 top-10 shadow-sm lg:top-16 lg:mt-7 lg:shadow-none border-r"
    >
      <div
      className="bg-white gap-2 lg:gap-1 flex lg:inline-grid lg:w-full rounded-md py-3 overflow-x-auto pr-2"
      >
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#panini">
          <div data-to-scrollspy-id="panini" className={"ss-item w-max"}>
            Panini
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#gourmetpizza">
          <div data-to-scrollspy-id="gourmetpizza" className={"ss-item w-max"}>
          Gourmet Pizza
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#burger">
          <div data-to-scrollspy-id="burger" className={"ss-item w-max"}>
            Burger
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
            Pizza
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md"onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
            Test 1
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
          Test 2
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
          Test 3
          </div>
        </a>
        <a className="hover:bg-gray-100 px-2 py-[4px] rounded-md" onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
          Test 4
          </div>
        </a>
      </div>
    </div>
  );
};

export default Nav;