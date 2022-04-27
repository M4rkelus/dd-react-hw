import React from "react";
import { events } from "../../store";
import "./clear-archive.css";

const ClearArchive = () => {
  const handleClearClick = () => {
    events.deleteArchive();
    events.fetch();
  };

  return (
    <button onClick={handleClearClick} className="clear-archive" type="button">
      Очистить архив
    </button>
  );
};

export default ClearArchive;
