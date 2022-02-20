import React from "react";

const FormContainer = () => {
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
  );
};

export default FormContainer;
