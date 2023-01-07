import React from "react";

export const CardWrapper = (props) => {
  return (
    <div className="flex flex-row p-1 mt-2 bg-black shadow-xl rounded-lg align-middle">
      <span className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center bg-white">
        {props.card["Set"] || "N/A"}
      </span>
      <span className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center bg-white">
        {props.card["Type"] || "N/A"}
      </span>
      <span className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center bg-white">
        {props.card["Subtype"] || "N/A"}
      </span>
      <span className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center bg-white">
        {props.card["Attribute(s)"] || "N/A"}
      </span>
      <span className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center bg-white">
        {props.card["Class"] || "N/A"}
      </span>
      <span className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center bg-white">
        {props.card["Rarity"] || "N/A"}
      </span>
    </div>
  );
};