import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faTimes } from "@fortawesome/free-solid-svg-icons";

export const PlayBoard = props => (
  <button
    className={
      props.status !== "none" ? "avoid-clicks play-board-box" : "play-board-box"
    }
    onClick={() => props.onClick(props.number, props.status)}
  >
    {props.status === "none" ? (
      ""
    ) : props.status === "playerOne" ? (
      <FontAwesomeIcon icon={faTimes} />
    ) : (
      <FontAwesomeIcon icon={faCircleNotch} />
    )}
  </button>
);

export default PlayBoard;
