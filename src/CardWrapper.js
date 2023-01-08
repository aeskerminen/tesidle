import React from "react";

export const CardWrapper = (props) => {
  return (
    <div className="grid grid-cols-6 p-1 mt-2 bg-black shadow-xl rounded-lg align-middle items-center">
      <span
        className={`m-0.5 p-0.5 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Set"]
            ? props.card["Set"] === props.target["Set"]
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Set"] || "N/A"}
      </span>
      <span
        className={`m-0.5 p-0.5 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Type"]
            ? props.card["Type"] === props.target["Type"]
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Type"] || "N/A"}
      </span>
      <span
        className={`m-0.5 p-0.5 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Subtype"]
            ? props.card["Subtype"] === props.target["Subtype"]
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Subtype"] || "N/A"}
      </span>
      <span
        className={`m-0.5 p-0.5 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Attribute(s)"]
            ? props.card["Attribute(s)"] === props.target["Attribute(s)"]
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Attribute(s)"] || "N/A"}
      </span>
      <span
        className={`m-0.5 p-0.5 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Class"]
            ? props.card["Class"] === props.target["Class"]
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Class"] || "N/A"}
      </span>
      <span
        className={`m-0.5 p-0.5 rounded-lg shadow-md text-center h-full bg-white ${
          props.card["Rarity"]
            ? props.card["Rarity"] === props.target["Rarity"]
              ? "bg-green-500"
              : "bg-red-500"
            : "bg-yellow-500"
        }`}
      >
        {props.card["Rarity"] || "N/A"}
      </span>
    </div>
  );
};
