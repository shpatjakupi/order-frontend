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
    <div className="w-100 mt-16 mx-4"
    style={{ position: 'sticky', top: '0'}}
    >
      <div
      className="bg-gray-100 px-4 rounded-md py-3 overflow-x-auto"
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <a onClick={(e) => onPress(e)} href="#panini">
          <div data-to-scrollspy-id="panini" className={"ss-item w-max"}>
            Panini
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#gourmetpizza">
          <div data-to-scrollspy-id="gourmetpizza" className={"ss-item w-max"}>
          Gourmet Pizza
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#burger">
          <div data-to-scrollspy-id="burger" className={"ss-item w-max"}>
            Burger
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
            Pizza
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
            Test 1
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
          Test 2
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
          Test 3
          </div>
        </a>
        <a onClick={(e) => onPress(e)} href="#pizza">
          <div data-to-scrollspy-id="pizza" className={"ss-item w-max"}>
          Test 4
          </div>
        </a>
      </div>
    </div>
  );
};

export default Nav;