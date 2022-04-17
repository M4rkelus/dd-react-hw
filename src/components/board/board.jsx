import React from "react";
import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";

const Board = () => {
  return (
    <section className="board">
      <Sorting />
      <div className="board__events">
        <Card />
      </div>
      <LoadMore />
    </section>
  );
};

export default Board;
