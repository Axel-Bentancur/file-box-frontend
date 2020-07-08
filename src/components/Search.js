import React, { Component } from "react";
/* import axios from "axios"; */

export default class Search extends Component {
  state = {
    number: "",
    parameter: "",
  };

  onChangeNumber = (e) => {
    this.setState({
      number: e.target.value,
    });
  };

  onChangeParameter = (e) => {
    this.setState({
      parameter: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const res = this.state;
    console.log(res);
    this.setState({ number: "", parameter: "" });
  };

  render() {
    return (
      <main className="container p-5">
        <div className="container jumbotron mt-4 ">
          <h1 className="display-4">BUSQUEDA</h1>
          <h2 className="lead">
            Ingrese el Numero de Expediente, Numero de Entrada o la Fecha que
            desee buscar.
          </h2>
          <hr className="m-4" />
          <form onSubmit={this.onSubmit}>
            <div className="form-row form-inline">
              <div className="col-auto">
                <select className="form-control form-control-lg mr-3 col-5" value={this.state.selectValue} onChange={this.onChangeParameter}>
                  <option defaultValue>Elegir Opcion</option>
                  <option value="files">
                    N° EN/EXP
                  </option>
                  <option value="box">
                    N° Caja Adea
                  </option>
                </select>
                <input
                  type="text"
                  className="form-control form-control-lg col-7 mr-3"
                  placeholder="Numero"
                  value={this.state.number}
                  onChange={this.onChangeNumber}
                />
                <button type="submit" className="btn btn-primary btn-lg">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    );
  }
}
