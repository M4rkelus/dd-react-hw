import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Card from "../card/card";
import Sorting from "../sorting/sorting";
import ClearArchive from "../clear-archive/clear-archive";
import { AppRoute } from "../../const";
import "./board.css";
import { observer } from "mobx-react-lite";

const Board = observer(({ events }) => {
  const { pathname } = useLocation();
  const [step, setStep] = useState(5);

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 5) : setStep(events.length);
  };

  return (
    <section className="board">
      {pathname === AppRoute.MAIN && <Sorting />}
      <div className="board__events">
        {events.slice(0, step).map((event) => (
          <Card event={event} key={event._id} />
        ))}
      </div>
      {pathname === AppRoute.ARCHIVE && <ClearArchive />}
      <button
        className="load-more"
        type="button"
        onClick={handleLoadMore}
        disabled={step === events.length}
      >
        Загрузить еще
      </button>
    </section>
  );
});

export default Board;
