import React from "react";
import Button from "react-bootstrap/Button";

const FormContainer = ({ calculateOptime }) => {
  const [formState, setFormState] = React.useState({
    bucketX: "",
    bucketY: "",
    indexZ: "",
  });

  const handledInput = (key, value) => {
    return setFormState((state) => ({
      ...state,
      [key]: value,
    }));
  };

  const validate = (e) => {
    e.preventDefault();
    const { bucketX, bucketY, indexZ } = formState;
    let isValid = true;
    if (bucketX === "" || bucketX.length === 0) {
      window.alert("Bucket X field its empty");
      isValid = false;
      return;
    }

    if (bucketY === "" || bucketY.length === 0) {
      window.alert("Bucket Y field its empty");
      isValid = false;
      return;
    }

    if (indexZ === "" || indexZ.length === 0) {
      window.alert("Bucket Z field its empty");
      isValid = false;
      return;
    }

    if (isValid) {
      calculateOptime({ bucketX, bucketY, indexZ });
    }
  };

  return (
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
                value={formState.bucketX}
                onChange={(event) =>
                  handledInput("bucketX", event.target.value)
                }
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
                value={formState.bucketY}
                onChange={(event) =>
                  handledInput("bucketY", event.target.value)
                }
              />
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
                value={formState.indexZ}
                onChange={(event) => handledInput("indexZ", event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="row mb-1 align-items-center">
        <div className="col">
          <Button variant="primary" type="submit" onClick={validate}>
            Submit
          </Button>
        </div>
      </div>
      <br />
    </div>
  );
};

export default FormContainer;
