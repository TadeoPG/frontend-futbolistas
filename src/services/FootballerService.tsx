import { environments } from "../environments/environments";

class FootballerService {
  API_SERVER = environments.API_SERVER + "/footballers";

  getAllFootballers = () => {
    return fetch(this.API_SERVER, {
      headers: {
        Authorization: `Basic ${btoa(
          `${environments.USER}:${environments.PASSWORD}`
        )}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  getFootballerById = (id: number) => {
    return fetch(`${this.API_SERVER}/${id}`, {
      headers: {
        Authorization: `Basic ${btoa(
          `${environments.USER}:${environments.PASSWORD}`
        )}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };

  getPagedFootballers = (size: number, page: number = 0) => {
    return fetch(`${this.API_SERVER}/pagination?page${page}&size=${size}`, {
      headers: {
        Authorization: `Basic ${btoa(
          `${environments.USER}:${environments.PASSWORD}`
        )}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
}

export default new FootballerService();
