import React, { useState } from "react";
import accordionData from "./data";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingleSelect = (getCurrentId) => {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(getCurrentId);
  };
  const handleMultipleSelect = (getCurrentId) => {
    const updatedMultiple = multiple.includes(getCurrentId)
      ? multiple.filter((id) => id !== getCurrentId)
      : [...multiple, getCurrentId];
    setMultiple(updatedMultiple);
  };
  const handleEnableMultipleSelect = () => {
    setEnableMultiSelect(!enableMultiSelect);
  };
  return (
    <>
      <div className="w-3/4 h-screen m-auto p-10 bg-gray-100">
        <div className="flex justify-center py-5">
          <button
            onClick={handleEnableMultipleSelect}
            className="px-5 py-3 bg-gray-800 text-white"
          >
            {enableMultiSelect ? "Disable Multi Select" : "Enable Multi Select"}
          </button>
        </div>

        <div className="space-y-4">
          {accordionData && accordionData.length ? (
            accordionData.map((dataItem) => (
              <div key={dataItem.id} className="">
                <div
                  className="flex justify-between p-4 shadow-xl w-full bg-gray-800 text-white rounded-t-sm"
                  onClick={
                    enableMultiSelect
                      ? () => handleMultipleSelect(dataItem.id)
                      : () => handleSingleSelect(dataItem.id)
                  }
                >
                  <h1>{dataItem.title}</h1>
                  <span>{selected === dataItem.id ? "-" : "+"}</span>
                </div>

                <div className="text-sm">
                  {enableMultiSelect
                    ? multiple.includes(dataItem.id) && (
                        <div className="p-3 px-6 bg-gray-300">
                          {dataItem.content}
                        </div>
                      )
                    : selected === dataItem.id && (
                        <div className="p-3 px-6 bg-gray-300">
                          {dataItem.content}
                        </div>
                      )}
                </div>
              </div>
            ))
          ) : (
            <div>No data is present</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Accordion;
