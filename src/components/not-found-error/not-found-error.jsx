import React from "react";
import "./not-found-error.css";

const NotFoundError = () => {
  return (
    <div className="error">
      <div className="error__container">
        <h1 className="error__title">404</h1>
        <p className="error__subtitle">Кажется, вы заблудились!</p>
        <p className="error__text">
          Страница, которую вы ищете, не существует. Как вы вообще здесь
          оказались?
        </p>
      </div>
    </div>
  );
};

export default NotFoundError;
