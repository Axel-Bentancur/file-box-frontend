import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
        <div className="row ">
          <div className="col d-flex align-items-center justify-content-center">
            <h1>Hola</h1>
          </div>
          <div className="col d-flex align-items-center justify-content-center">
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
                  <br/>
                  <span>Todavia no estas registrado, ingresa <Link to='/register'>ACA</Link></span>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
