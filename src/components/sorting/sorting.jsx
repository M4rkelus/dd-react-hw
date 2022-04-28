import React from "react";
import { action } from "mobx";
import { events } from "../../store";

const Sorting = () => {
  const handleSorted = action((e) => {
    events.filtredData.sort((a, b) =>
      e.target.value === "new"
        ? Date.parse(a.date) - Date.parse(b.date)
        : Date.parse(b.date) - Date.parse(a.date)
    );
  });

  return (
    <div className="board__filter-list">
      <span className="board__filter--title">Сортировка:</span>
      <input
        type="radio"
        id="board__filter-default"
        className="board__filter visually-hidden"
        name="board-filter"
        defaultChecked
      />
      <label htmlFor="board__filter-default" className="board__filter-label">
        По умолчанию
      </label>
      <input
        type="radio"
        id="board__filter-new"
        className="board__filter visually-hidden"
        name="board-filter"
        value={"new"}
        onClick={handleSorted}
      />
      <label htmlFor="board__filter-new" className="board__filter-label">
        Сначала новые
      </label>
      <input
        type="radio"
        id="board__filter-old"
        className="board__filter visually-hidden"
        name="board-filter"
        value={"old"}
        onClick={handleSorted}
      />
      <label htmlFor="board__filter-old" className="board__filter-label">
        Сначала старые
      </label>
    </div>
  );
};

export default Sorting;
