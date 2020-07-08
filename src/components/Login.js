import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <main className="container p-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card">
              <div className="card-header">Acount Login</div>
              <div className="card-body">
                <form action="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="dni"
                      placeholder="DNI"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="usuario"
                      placeholder="Usuario"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Contraseña"
                    />
                  </div>
                  <button className="btn btn-primary btn-block">login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
