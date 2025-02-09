import { useState, useRef } from "react";
import useOutsideClick from ".";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div className="flex justify-center py-5">
      {showContent ? (
        <div className="text-center py-10 space-y-4" ref={ref}>
          <h1 className="text-3xl font-bold">This is a random content</h1>
          <p>
            Please click outside of this to close this. It wont close if you
            click inside this content
          </p>
        </div>
      ) : (
        <button
          className="px-8 py-3 bg-gradient-to-r from-violet-300 via-pink-400 to-red-500 text-white"
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}
