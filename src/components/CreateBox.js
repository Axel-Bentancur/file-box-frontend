import React, { Component } from "react";

export default class CreateBox extends Component {
  state = {
    box_number: "",
    file_number: "",
    author: "",
  };

  onChangeBox = (e) => {
    this.setState({
      box_number: e.target.value,
    });
  };

  onChangeFile = (e) => {
    this.setState({
      file_number: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  onSubmitCreate = (e) => {
    e.preventDefault();
    let text = `box: ${this.state.box_number} file: ${this.state.file_number}`;
    let item = document.createElement("li");
    let textNode = document.createTextNode(text);
    item.appendChild(textNode);
    document.getElementById("lista").appendChild(item);
    this.setState({
      file_number: "",
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h6>Create Box</h6>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">Box</div>
                <div className="card-body">
                  <form onSubmit={this.onSubmitCreate}>
                    <div className="input-group mb-3">
                      <div className="form-group row">
                        <label
                          htmlFor="inputEmail3"
                          className="col-sm-5 col-form-label"
                        >
                          Box Number
                        </label>
                        <div className="col-sm-7">
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeBox}
                            value={this.state.box_number}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label
                          htmlFor="inputEmail3"
                          className="col-sm-5 col-form-label"
                        >
                          File Number
                        </label>
                        <div className="col-sm-7">
                          <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeFile}
                            value={this.state.file_number}
                          />
                        </div>
                      </div>
                      <button className="btn btn-primary btn-block">Add</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">Files Added</div>
                <div className="card-body">
                  <ul id="lista"></ul>
                  <form onSubmit={this.onSubmit}>
                    <button className="btn btn-primary btn-block">
                      Create Box
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
