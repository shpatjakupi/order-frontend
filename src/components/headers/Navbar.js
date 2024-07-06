import React from "react";
import { useUserContext } from "context/usectx";

const Nav = () => {
  const { data, capitalizeFirstLetter } = useUserContext();

  const uniqueCategories = data ? [...new Set(data.map(item => item.foodKey.replace(/_/g, ' ')))] : [];

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
    <div className="bg-white sticky top-10 mt-10 shadow-sm lg:top-16 lg:mt-7 lg:shadow-none border-r">
      <div className=" gap-2 lg:gap-1 flex lg:inline-grid lg:w-full rounded-md py-3 overflow-x-auto pr-2">
        {uniqueCategories.map((category, index) => {
          // Generate a valid HTML ID by replacing spaces with dashes
          const categoryId = category.toLowerCase().replace(/\s+/g, '-');
          return (
            <a
              key={index}
              className="hover:bg-gray-100 px-2 py-[4px] rounded-md"
              onClick={(e) => onPress(e)}
              href={`#${categoryId}`}
            >
              <div data-to-scrollspy-id={categoryId} className="ss-item w-max">
                {capitalizeFirstLetter(category)}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
