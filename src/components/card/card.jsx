import React from "react";

const Card = () => {
  return (
    <article className="card">
      <div className="card__form">
        <div className="card__inner">
          <div className="card__control">
            <button type="button" className="card__btn card__btn--edit">
              Редактировать
            </button>
            <button type="button" className="card__btn card__btn--archive">
              В архив
            </button>
            <button type="button" className="card__btn card__btn--favorites">
              В избранное
            </button>
            <button type="button" className="card__btn card__btn--remove">
              Удалить
            </button>
          </div>

          <div className="card__textarea-wrap">
            <p className="card__text--theme">
              Nulla quis lorem ut libero malesuada feugiat.
            </p>
            <p className="card__text--comment">
              Curabitur aliquet quam id dui posuere blandit. Pellentesque in
              ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada
              feugiat.
            </p>
          </div>

          <div className="card__settings">
            <span className="card__date">23 Сентября</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
