import React, { useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import "moment/locale/ru";

const Event = ({ events }) => {
  const { id } = useParams();
  const [currentEvt] = events.filter((event) => event._id === id);
  const theme = id ? currentEvt.theme : "";
  const comment = id ? currentEvt.comment : "";
  const formatDate = id
    ? moment(currentEvt.date).format("YYYY-MM-DDThh:mm")
    : "";
  const renderTitle = () => {
    return id ? "Редактирование события" : "Добавление события";
  };

  const [form, setForm] = useState({
    theme: theme,
    comment: comment,
    date: formatDate,
  });

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(form);
  };

  const handleReset = () => {
    setForm({
      theme: "",
      comment: "",
      date: "",
    });
  };

  return (
    <section className="board">
      <form
        className="board__form"
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        <h2 className="board__title">{renderTitle()}</h2>
        <fieldset className="board__field board__field--theme">
          <label htmlFor="theme" className="board__label board__label--theme">
            Тема:
          </label>
          <textarea
            onChange={handleFieldChange}
            type="text"
            className="board__input board__input--theme"
            name="theme"
            defaultValue={form.theme}
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
            onChange={handleFieldChange}
            type="text"
            className="board__input board__input--comment"
            name="comment"
            defaultValue={form.comment}
            required
          ></textarea>
        </fieldset>
        <fieldset className="board__field board__field--date">
          <label htmlFor="date" className="board__label board__label--date">
            Дата:
          </label>
          <input
            onChange={handleFieldChange}
            type="datetime-local"
            className="board__input board__input--date"
            name="date"
            defaultValue={form.date}
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
