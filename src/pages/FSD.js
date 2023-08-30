import React from "react";
import img from "./image.jpg";

const Fsd = () => {
  return (
    <div className="container">
      <div className="row mt-3 mb-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <img src={img} alt="..." />
              <h5 className="card-title mt-3">HTML</h5>
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
              <h5 className="card-title mt-3">CSS</h5>
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
              <h5 className="card-title mt-3">JavaScript</h5>
              <p className="card-text">
                Some quick example text to build on the card title.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3 mb-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <img src={img} alt="..." />
              <h5 className="card-title mt-3">React JS</h5>
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
              <h5 className="card-title mt-3">Mongo DB</h5>
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
              <h5 className="card-title mt-3">Node JS</h5>
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

export default Fsd;
