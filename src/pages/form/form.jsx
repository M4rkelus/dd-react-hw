import React from "react";
import { observer } from "mobx-react-lite";

import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import NoEvent from "../../components/no-events/no-events";
import { events } from "../../store";

const Form = observer(() => {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter control={false} />
        <Event events={events} />
        {/* <NoEvent /> */}
      </section>
    </>
  );
});

export default Form;
