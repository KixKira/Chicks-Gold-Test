import React from "react";
import FormContainer from "./components/form-container";
import Table from "./components/table";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [rowsTable, setRows] = React.useState([]);

  const gcd = (a, b) => {
    // Function to get the Greatest Common Divisor recursively
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const fillTransfer = (toCap, fromCap, d, nameTo, nameFrom) => {
    // The variables are filled, to start the process
    let from = fromCap;
    let to = 0;
    let cant = 1;

    // An empty array is initialized to store the steps to display
    const steps = [];
    // From: It's the first bucket to fill
    // To: It's the second bucket to fill
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
      // Transfer between buckets is made
      steps.push({
        [nameFrom]: from,
        [nameTo]: to,
        instrucction: `Transfer bucket ${nameFrom} to bucket ${nameTo}`,
      });

      if (from === d || to === d) {
        break;
      }

      if (from === 0) {
        // Bucket is filled to it's limit
        from = fromCap;
        steps.push({
          [nameFrom]: from,
          [nameTo]: to,
          instrucction: `Fill bucket ${nameFrom}`,
        });
        cant += 1;
      }

      if (to === toCap) {
        // Bucket is emptied
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
    // The Greatest Common Divisor is removed to find out if the operation is possible
    if (z % gcd(x, y) !== 0) return -1;
    if (z % gcd(y, x) !== 0) return -1;

    // The filling algorithm is performed by Bucket X
    const startFromX = fillTransfer(x, y, z, "X", "Y");

    // The filling algorithm is performed by Bucket Y
    const startFromY = fillTransfer(y, x, z, "Y", "X");

    // The minimum value of the previous functions is taken
    const minValue = Math.min(startFromX.cant, startFromY.cant);

    if (startFromX.cant === minValue) {
      // The steps of the algorithm are returned
      return startFromX.steps;
    }

    if (startFromY.cant === minValue) {
      // The steps of the algorithm are returned
      return startFromY.steps;
    }

    // Something happened and nothing returned
    return null;
  };
  const calculateOptime = ({ bucketX, bucketY, indexZ }) => {
    const result = minSteps(Number(bucketX), Number(bucketY), Number(indexZ));
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
