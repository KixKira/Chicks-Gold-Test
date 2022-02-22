import React from "react";
import FormContainer from "./components/form-container";
import Table from "./components/table";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [rowsTable, setRows] = React.useState([]);

  const gcd = (a, b) => {
    // funcion para sacar el Maximo comun divisor recursivamente
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const llenadoTraslado = (toCap, fromCap, d, nameTo, nameFrom) => {
    // se llenan las variables, para empezar el proceso
    let from = fromCap;
    let to = 0;
    let cant = 1;

    // se inicializa un array vacio, para guardar los pasos a mostrar.
    const steps = [];
    // From: es el bucket que se llena primero
    // To: es el bucket que se llena segundo
    steps.push({
      [nameFrom]: from,
      [nameTo]: to,
      instrucction: `Fill Bucket ${nameFrom}`,
    });

    while (from !== d && to !== d) {
      const temp = Math.min(from, toCap - to);

      to += temp;
      from -= temp;

      cant += 1;
      // Se hace transferencia entre buckets
      steps.push({
        [nameFrom]: from,
        [nameTo]: to,
        instrucction: `Transfer bucket ${nameFrom} to bucket ${nameTo}`,
      });

      if (from === d || to === d) {
        break;
      }

      if (from === 0) {
        // Se llena bucket hasta su limite
        from = fromCap;
        steps.push({
          [nameFrom]: from,
          [nameTo]: to,
          instrucction: `Fill bucket ${nameFrom}`,
        });
        cant += 1;
      }

      if (to === toCap) {
        // Se vacia bucket
        to = 0;
        steps.push({
          [nameFrom]: from,
          [nameTo]: to,
          instrucction: `Empty bucket ${nameTo}`,
        });
        cant += 1;
      }
    }
    return { cant, steps };
  };

  const minSteps = (x, y, z) => {
    // Se saca el maximo comun divisor para saber si es posible la operacion
    if (z % gcd(x, y) !== 0) return -1;
    if (z % gcd(y, x) !== 0) return -1;

    // se realiza el algoritmo de llenado por el Bucket X
    const startFromX = llenadoTraslado(x, y, z, "X", "Y");

    // se realiza el algoritmo de llenado por el Bucket Y
    const startFromY = llenadoTraslado(y, x, z, "Y", "X");

    // Se toma el valor minimo de las funciones anteriores
    const minValue = Math.min(startFromX.cant, startFromY.cant);

    if (startFromX.cant === minValue) {
      // Se retornan los pasos del algoritmo
      return startFromX.steps;
    }

    if (startFromY.cant === minValue) {
      // Se retornan los pasos del algoritmo
      return startFromY.steps;
    }

    // Algo sucedio, y no retorno nada.
    return null;
  };
  const calculateOptime = ({ bucketX, bucketY, indexZ }) => {
    const result = minSteps(bucketX, bucketY, indexZ);
    if ((result && result === -1) || result == null) {
      window.alert("Not solution");
      return;
    }
    setRows(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Inputs */}
        <div className="container">
          <FormContainer calculateOptime={calculateOptime} />
        </div>

        {/* Table */}
        <div className="container">
          <Table rowsTable={rowsTable} />
        </div>
      </header>
    </div>
  );
}

export default App;
