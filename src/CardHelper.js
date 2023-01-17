import React from "react";

export const CardHelper = (props) => {
  return (
    <div className="m-1 p-2 flex flex-col items-center bg-slate-500 shadow-md rounded-lg">
      <span className="text-2xl p-1">{props.card["Name"]}</span>
      <img
        className="m-1 border-slate-400 border-2 shadow-md bg-white rounded-md"
        src={`${process.env.PUBLIC_URL}/cards/${props.card["Name"]}.jpg`}
      ></img>
      <div className="p-1.5 mt-1 bg-slate-400 flex flex-col gap-y-1 w-full rounded-md shadow-md">
        <div className="flex flex-row gap-x-2">
          <span className="p-2 bg-white shadow-md rounded-sm grow text-center">
            {props.card["Set"] || "N/A"}
          </span>
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="p-2 bg-white shadow-md rounded-sm grow text-center">
            {props.card["Type"] || "N/A"}
          </span>
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="p-2 bg-white shadow-md rounded-sm grow text-center">
            {props.card["Subtype"] || "N/A"}
          </span>
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="p-2 bg-white shadow-md rounded-sm grow text-center">
            {props.card["Attribute(s)"] || "N/A"}
          </span>
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="p-2 bg-white shadow-md rounded-sm grow text-center">
            {props.card["Rarity"] || "N/A"}
          </span>
        </div>
        <div className="flex flex-row gap-x-2">
          <span className="p-2 bg-white shadow-md rounded-sm grow text-center">
            {props.card["Effects"] || "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};
