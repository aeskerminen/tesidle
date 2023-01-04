import React from "react";

export const CharacterInfoBox = (props) => {
  return (
    <div className="flex flex-row p-2 align-middle">
      <span
        style={
          props.curChar["Race"] === props.tgtChar["Race"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Race"]}
      </span>
      <span
        style={
          props.curChar["Gender"] === props.tgtChar["Gender"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Gender"]}
      </span>
      <span
        style={
          props.curChar["Class"] === props.tgtChar["Class"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Class"]}
      </span>
      <span
        style={
          props.curChar["Location"] === props.tgtChar["Location"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Location"]}
      </span>
      <span
        style={
          props.curChar["Rank"] === props.tgtChar["Rank"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Rank"]}
      </span>
      <span
        style={
          props.curChar["Faction"] === props.tgtChar["Faction"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Faction"]}
      </span>
      <span
        style={
          props.curChar["Services"] === props.tgtChar["Services"]
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" }
        }
        className="p-1border-black border-2 w-1/6 text-center"
      >
        {props.curChar["Services"]}
      </span>
    </div>
  );
};
