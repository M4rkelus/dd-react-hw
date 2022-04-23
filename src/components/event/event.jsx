import React from "react";
import { useParams } from "react-router-dom";

const Event = () => {
  const { id } = useParams();
  const render = () => {
    return id ? "Редактирование события" : "Добавление события";
  };

  return (
    <section className="board">
      <form className="board__form">
        <h2 className="board__title">{render()}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">
            Тема:
          </label>
          <textarea
            type="text"
            className="board__input board__input--theme"
            name="theme"
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--comment">
          <label
            htmlFor="comment"
            className="board__label board__label--comment"
          >
            Комментарий:
          </label>
          <textarea
            type="text"
            className="board__input board__input--comment"
            name="comment"
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">
            Дата:
          </label>
          <input
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
          />
        </fieldset>
        <div className="btns">
          <button type="submit" className="btn-submit">
            Добавить
          </button>
          <button type="reset" className="btn-reset">
            Очистить
          </button>
        </div>
      </form>
    </section>
  );
};

export default Event;
