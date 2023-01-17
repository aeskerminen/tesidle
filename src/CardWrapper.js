import React from "react";

export const CardWrapper = (props) => {
  return (
    <div className="grid grid-cols-6 p-1 mt-2 bg-white shadow-xl rounded-lg align-middle items-center">
      <span
        className={`mr-0.5 ml-0.5 p-1 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Set"]
            ? props.card["Set"] === props.target["Set"]
              ? "bg-[#8EA604]"
              : "bg-[#DF2935]"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Set"] || "N/A"}
      </span>
      <span
        className={`mr-0.5 ml-0.5 p-1 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Type"]
            ? props.card["Type"] === props.target["Type"]
              ? "bg-[#8EA604]"
              : "bg-[#DF2935]"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Type"] || "N/A"}
      </span>
      <span
        className={`mr-0.5 ml-0.5 p-1 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Subtype"]
            ? props.card["Subtype"] === props.target["Subtype"]
              ? "bg-[#8EA604]"
              : "bg-[#DF2935]"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Subtype"] || "N/A"}
      </span>
      <span
        className={`mr-0.5 ml-0.5 p-1 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Attribute(s)"]
            ? props.card["Attribute(s)"] === props.target["Attribute(s)"]
              ? "bg-[#8EA604]"
              : "bg-[#DF2935]"
            : "bg-yellow-500"
        }`}
      >
        {Array.isArray(props.card["Attribute(s)"])
          ? props.card["Attribute(s)"].join(", ")
          : props.card["Attribute(s)"] || "N/A"}
      </span>
      <span
        className={`mr-0.5 ml-0.5 p-1 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Class"]
            ? props.card["Class"] === props.target["Class"]
              ? "bg-[#8EA604]"
              : "bg-[#DF2935]"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Class"] || "N/A"}
      </span>
      <span
        className={`mr-0.5 ml-0.5 p-1 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Rarity"]
            ? props.card["Rarity"] === props.target["Rarity"]
              ? "bg-[#8EA604]"
              : "bg-[#DF2935]"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Rarity"] || "N/A"}
      </span>
    </div>
  );
};
