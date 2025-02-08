import React, { useState } from "react";
import ModalChild from "./ModalChild";

const ModalParent = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClicked = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  };

  return (
    <div className="text-center">
      <div className="py-5">
        <button
          onClick={handleClicked}
          className="px-8 py-3 bg-amber-200 rounded-2xl text-amber-400 hover:bg-amber-400 hover:text-amber-100"
        >
          {isClicked !== true ? "Open Modal" : "Close Modal"}
        </button>
      </div>
      <div>
        {isClicked && (
          <ModalChild
            onClick={handleClicked}
            body={"Customized body container"}
            header={"I edited the header content"}
            footer={"hello footer how are u"}
          />
        )}
      </div>
    </div>
  );
};

export default ModalParent;
