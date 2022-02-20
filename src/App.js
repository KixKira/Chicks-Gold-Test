import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Inputs */}
        <div className="container">
          <div className="row align-items-start">
            <div className="col">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="col-form-label">Bucket X</label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Input value"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="col-form-label">Bucket Y</label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Input value"
                    pattern="[0-9]*"
                  />
                </div>
                <div className="row mb-1 align-items-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <label className="col-form-label">Bucket Z</label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Input value"
                    pattern="[0-9]*"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>

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
