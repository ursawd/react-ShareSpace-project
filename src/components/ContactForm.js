import React from "react";
export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value,
    });
  }

  render() {
    return (
      <form>
        <label>
          User Name
          <input name="user" type="text" value={this.state.user} onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Password
          <input name="password" type="nutextmber" value={this.state.password} onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
