import React from "react";

export const CharacterInfoBox = (props) => {
  return (
    <div className="flex flex-row p-1 mt-2 bg-white shadow-xl rounded-lg align-middle">
      <span
        style={
          props.curChar["Race"] === props.tgtChar["Race"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Race"] || "N/A" }
      </span>
      <span
        style={
          props.curChar["Gender"] === props.tgtChar["Gender"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Gender"] || "N/A"}
      </span>
      <span
        style={
          props.curChar["Class"] === props.tgtChar["Class"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Class"] || "N/A"}
      </span>
      <span
        style={
          props.curChar["Location"] === props.tgtChar["Location"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Location"] || "N/A"}
      </span>
      <span
        style={
          props.curChar["Rank"] === props.tgtChar["Rank"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Rank"] || "N/A"}
      </span>
      <span
        style={
          props.curChar["Faction"] === props.tgtChar["Faction"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Faction"] || "N/A"}
      </span>
      <span
        style={
          props.curChar["Services"] === props.tgtChar["Services"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-0.5 m-0.5 rounded-lg shadow-md w-1/6 text-center"
      >
        {props.curChar["Services"] || "N/A"}
      </span>
    </div>
  );
};
