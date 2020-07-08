import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/es";

export default class Search extends Component {
  state = {
    response: [],
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
    const res = await axios.get(
      `http://localhost:4000/search/${this.state.parameter}/${this.state.number}`
    );
    this.setState({ response: [] });
    this.setState({ response: res.data });
    this.setState({ number: "" });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h6>Search</h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">Ingresar Numero</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmit}>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text"
                          htmlFor="inputGroupSelect01"
                        >
                          Tipo
                        </label>
                      </div>
                      <select
                        className="custom-select"
                        id="inputGroupSelect01"
                        value={this.state.selectValue}
                        onChange={this.onChangeParameter}
                      >
                        <option defaultValue>Seleccionar</option>
                        <option value="files">N° EN/EXP</option>
                        <option value="box">N° Caja Adea</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Ej:  123456 - 123/45"
                        value={this.state.number}
                        onChange={this.onChangeNumber}
                      />
                    </div>
                    <button className="btn btn-primary btn-block">
                      Buscar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">Resultado de Busqueda</div>
                <div className="card-body">
                  <ul className="list-group list-group-horizontal">
                    <li className="list-group-item col-lg-4">Caja Adea</li>
                    <li className="list-group-item col-lg-4">
                      Numero de Archivo
                    </li>
                    <li className="list-group-item col-lg-4">Author</li>
                  </ul>
                  {this.state.response.map((data) => (
                    <ul
                      className="list-group list-group-horizontal"
                      key={data._id}
                    >
                      <li className="list-group-item col-lg-4">
                        {data.box_number}
                      </li>
                      <li className="list-group-item col-lg-4">{data.files}</li>
                      <li className="list-group-item col-lg-4">
                        {moment(data.date).format("l") +
                          " " +
                          moment(data.date).format("LT")}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
