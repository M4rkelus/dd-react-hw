import React from "react";
import Header from "../../components/header/header";
import Filter from "../../components/filter/filter";
import Event from "../../components/event/event";
import NoEvent from "../../components/no-events/no-events";

const Form = () => {
  return (
    <>
      <Header />
      <section className="main__wrapper">
        <Filter control={false} />
        <Event />
        {/* <NoEvent /> */}
      </section>
    </>
  );
};

export default Form;
