import React from "react";
import Board from "../../components/board/board";
import Header from "../../components/header/header";

const Archive = ({ events }) => {
  const archiveEvents = events.filter((evt) => evt.archive);
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Board events={archiveEvents} />
      </section>
    </>
  );
};

export default Archive;
