import React from "react";

const ModalChild = ({ header, body, footer, onClick }) => {
  return (
    <div className="w-4/5 m-auto min-h-screen  p-5">
      <div className="bg-red-400 flex items-center justify-center relative py-10">
        <div>{header ? header : " header container"}</div>
        <span
          className="absolute top-0 right-1 text-xl cursor-pointer"
          onClick={onClick}
        >
          &times;
        </span>
      </div>
      <div className="bg-green-400 py-20">
        {body ? body : " body container"}
      </div>
      <div className="bg-purple-400 py-10">
        {footer ? footer : " footer container"}
      </div>
    </div>
  );
};

export default ModalChild;
