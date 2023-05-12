import React from "react";
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const inCss = { color: 'white', backgroundColor: 'purple' };

const App = () => {
  return (
    <>
      <h1 className="text-capitalize text-center m-5">Welcome</h1>
      <button className="btn btn-success"> Start </button>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">An active item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="..." className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
