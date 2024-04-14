import { useEffect, useState } from "react";
import FootballerService from "../services/FootballerService";

export const FootballerListComponent = () => {
  interface Footballer {
    idFootballer: number;
    names: string;
    lastName: string;
    birthdate: string;
    characteristics: string;
    position: {
      description: string;
    };
  }

  const [footballers, setFootballers] = useState<Footballer[]>([]);
  const [selectedFootballer, setSelectedFootballer] =
    useState<Footballer | null>(null); // Estado para almacenar el futbolista seleccionado

  // Función para manejar el clic en el botón "Visualizar"
  const handleViewFootballer = (footballer: Footballer) => {
    FootballerService.getFootballerById(footballer.idFootballer)
      .then((data) => {
        setSelectedFootballer(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching the footballer:", error);
      });
  };

  useEffect(() => {
    FootballerService.getAllFootballers()
      .then((data) => {
        setFootballers(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("There was a problem fetching footballers:", error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">Lista de futbolistas</h2>
      <table className="table table-bordered table-striped">
        <thead>
          <th>ID</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Fecha de Nacimiento</th>
          <th>Características</th>
          <th>Posición</th>
          <th>Visualizar</th>
        </thead>
        <tbody>
          {footballers.map((footballer: any) => (
            <tr key={footballer.idFootballer}>
              <td>{footballer.idFootballer}</td>
              <td>{footballer.names}</td>
              <td>{footballer.lastName}</td>
              <td>{footballer.birthdate}</td>
              <td>{footballer.characteristics}</td>
              <td>{footballer.position.description}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-success"
                  data-bs-toggle="modal"
                  data-bs-target="#verticallyCenteredScrollable"
                  onClick={() => handleViewFootballer(footballer)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="modal fade modal-dialog modal-dialog-scrollable"
        id="verticallyCenteredScrollable"
        aria-labelledby="verticallyCenteredScrollableLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="verticallyCenteredScrollableLabel"
              >
                Detalles del Futbolista
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {selectedFootballer && (
                <div>
                  <p>ID: {selectedFootballer.idFootballer}</p>
                  <p>Nombres: {selectedFootballer.names}</p>
                  <p>Apellidos: {selectedFootballer.lastName}</p>
                  <p>Fecha de Nacimiento: {selectedFootballer.birthdate}</p>
                  <p>Características: {selectedFootballer.characteristics}</p>
                  <p>Posición: {selectedFootballer.position.description}</p>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
