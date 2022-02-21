import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FormContainer from "./components/form-container";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Inputs */}
        <div>
          <FormContainer />
        </div>

        {/*Buckets*/}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div id="bucket" className="col"></div>
            </div>
            <div className="col">
              <div id="bucket" className="col"></div>
            </div>
          </div>
        </div>
        <br></br>

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
