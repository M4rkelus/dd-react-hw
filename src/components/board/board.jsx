import React from "react";
import { useLocation } from "react-router-dom";

import Card from "../card/card";
import LoadMore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import ClearArchive from "../clear-archive/clear-archive";
import { AppRoute } from "../../const";

const Board = ({ events }) => {
  const { pathname } = useLocation();

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && <Sorting />}
      <div className="board__events">
        {events.map((event) => (
          <Card {...event} key={event._id} />
        ))}
      </div>
      {pathname === AppRoute.ARCHIVE && <ClearArchive />}
      <LoadMore />
    </section>
  );
};

export default Board;
