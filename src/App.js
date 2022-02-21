import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import FormContainer from "./components/form-container";
import Buckets from "./components/buckets";
import Table from "./components/table";

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
        <div>
          <Table />
        </div>
      </header>
    </div>
  );
}

export default App;
