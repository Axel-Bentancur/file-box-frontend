import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  state = {
    user: "",
    dni: "",
    password: "",
    confirm_password: "",
  };

  onChangeUserName = (e) => {
    this.setState({
      user: e.target.value,
    });
  };

  onChangeDni = (e) => {
    this.setState({
      dni: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeconfirm_Password = (e) => {
    this.setState({
      confirm_password: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4000/user/signup", {
      user: this.state.user,
      dni: this.state.dni,
      password: this.state.password,
      confirm_password: this.state.confirm_password,
    });
    this.setState({ user: "", dni: "", password: "", confirm_password: "" });
  };

  render() {
    return (
      <main className="container p-5">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <div className="card">
              <div className="card-header">Acount Login</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="dni"
                      placeholder="DNI"
                      value={this.state.dni}
                      onChange={this.onChangeDni}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="usuario"
                      placeholder="Usuario"
                      value={this.state.user}
                      onChange={this.onChangeUserName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Contraseña"
                      value={this.state.password}
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="confirm_password"
                      placeholder="Repita Contraseña"
                      value={this.state.confirm_password}
                      onChange={this.onChangeconfirm_Password}
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
