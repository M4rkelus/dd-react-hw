const url = "https://fe-school-api.herokuapp.com/api/events";

const request = async (url, method = "GET", body) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: new Headers({ "Content-type": "application/json" }),
  });

  return response.json();
};

export const getEvents = () => {
  return request(`${url}`);
};

export const addEvent = (data) => {
  const eventData = {
    ...data,
    favorite: false,
    archive: false,
  };
  return request(`${url}`, "POST", eventData);
};

export const deleteEvent = (id) => {
  return request(`${url}/${id}`, "DELETE");
};

export const editEvent = (data) => {
  return request(`${url}`, "PUT", data);
};

export const deleteArchive = () => {
  return request(`${url}/archive/delete`, "DELETE");
};
