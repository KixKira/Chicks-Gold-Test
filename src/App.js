import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FormContainer from "./components/form-container";
import Buckets from "./components/buckets";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Inputs */}
        <div>
          <FormContainer />
        </div>

        <br />

        {/*Buckets*/}
        <div>
          <Buckets />
        </div>

        <br />

        {/* Table */}
        <div className="container">
          <div className="row align-items-center">
            <table className="table table-dark table-striped">
              <thead>
                <tr>
                  <th scope="col">Bucket X</th>
                  <th scope="col">Bucket Y</th>
                  <th scope="col">Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Value</td>
                  <td>Value</td>
                  <td>Value</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
