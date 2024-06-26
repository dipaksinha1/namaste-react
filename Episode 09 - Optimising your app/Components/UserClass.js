import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(`${this.props.name} Constructor`);

  }

  componentDidMount(){
    console.log(`${this.props.name} componentDidMount`)
  }


  render() {
    console.log(`${this.props.name} Render`);

    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h1>Count: {this.state.count}</h1>
        <h1>Count1: {this.state.count1}</h1>
        <button
          onClick={() => {
            //Never update variable directly
            this.setState({
              count: this.state.count + 1
            });
          }}
        >Click Me</button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @dipakNull</h3>
      </div>
    );
  }
}

export default UserClass;
