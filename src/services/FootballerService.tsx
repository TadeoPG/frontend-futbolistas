import { environments } from "../environments/environments";

class FootballerService {
  API_SERVER = environments.API_SERVER + "/footballers";

  getAllFootballers = () => {
    return fetch(this.API_SERVER)
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
    return fetch(`${this.API_SERVER}/${id}`)
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
