import React from "react";
import img from "./image.jpg";

const Cyber = () => {
  return (
    <div className="container">
      <div className="row mt-3 mb-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <img src={img} alt="..." />
              <h5 className="card-title mt-3">Power Shell</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <img src={img} alt="..." />
              <h5 className="card-title mt-3">Python</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
