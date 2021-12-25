import React from "react";
export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* ===================================================== */}
        {/* test form, used as template. does not display ie d-none */}
        <form className="d-none" onSubmit={this.handleSubmit}>
          <label>
            User Name
            <input name="user" type="text" value={this.state.user} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Password
            <input name="password" type="text" value={this.state.password} onChange={this.handleInputChange} />
          </label>
          <button type="submit">submit</button>
        </form>
        {/* ===================================================== */}
        <form id="formid" className="lead" onSubmit={this.handleSubmit} style={{ marginTop: "5rem" }}>
          <div className="form-row">
            <div className="col-12">
              <label>Name*</label>
            </div>
            <div className="col-12 row">
              <div className="form-group col-6">
                <input type="text" className="form-control" id="firstName" />
                <label htmlFor="firstName" className="form-text text-muted">
                  First Name
                </label>
              </div>
              <div className="form-group col-6">
                <input type="text" className="form-control" id="lastName" />
                <label htmlFor="lastName" className="form-text text-muted">
                  Last Name
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="inputEmail">Email*</label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <br />
          <label htmlFor="tellUs">Tell us something about yourself*</label>
          <div className="form-group">
            <textarea className="form-control" id="tellUs" rows="4"></textarea>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="hearAbout">How did you hear about us?</label>
            <input type="text" className="form-control" id="hearAbout" />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="membershipSelect">Which membership are you interested in?*</label>
            <select className="form-select" id="membershipSelect">
              <option>1 Day / Week</option>
              <option>2 Days / Week</option>
              <option>24/7 Hot Desk</option>
              <option>Virtual Office</option>
              <option>Virtual Office+</option>
              <option>I don't know yet</option>
            </select>
          </div>

          <button id="formbutton" className="my-5 btn btn-warning btn-lg">
            Let's Cowork
          </button>
        </form>
      </div>
    );
  }
}
