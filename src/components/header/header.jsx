import React from "react";
import { AppRoute } from "../../const";

const Header = ({ mode }) => {
  return (
    <section className="main__header">
      <section className="main__header-wrap">
        <span className="main__header-logo">SomeList</span>
        <div className="main__header-group-lnk">
          <a
            href="#"
            className={`main__header-lnk ${
              mode === AppRoute.MAIN && "lnk-active"
            }`}
          >
            События
          </a>
          <a
            href="#"
            className={`main__header-lnk ${
              mode === AppRoute.ARCHIVE && "lnk-active"
            }`}
          >
            Архив
          </a>
        </div>
      </section>
    </section>
  );
};

export default Header;
