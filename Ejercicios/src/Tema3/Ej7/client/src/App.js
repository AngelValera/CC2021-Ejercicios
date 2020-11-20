import React, { useState } from "react";
import axios from "axios";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    animals: [],
  });

  const { animals } = values;

  React.useEffect(() => {
    setValues({ ...values });
    axios({
      method: "GET",
      url: `http://localhost:5000/`,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        setValues((values) => ({
          ...values,
          animals: response.data.animals,
        }));
        console.log(response.data.animals);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (animals.length > 0) {
    return (
      <div className="App-header">
        <h1>Animales</h1>
        <BootstrapTable data={animals}>
          <TableHeaderColumn dataField="animal" isKey>
            Animal
          </TableHeaderColumn>
          <TableHeaderColumn dataField="especie">Especie</TableHeaderColumn>
          <TableHeaderColumn dataField="alimentacion">
            Alimentacion
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  } else {
    return <p className="text-center">No hay animales que mostrar</p>;
  }
};;
export default App;
