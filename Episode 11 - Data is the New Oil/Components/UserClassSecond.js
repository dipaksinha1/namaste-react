import React from "react";

class UserClassSecond extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    console.log(`componentDidMount`);

    const data = await fetch("https://api.github.com/users/dipaksinha1");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer=setInterval(() => {
      console.log("Tick Tick ....");
    }, 1000);
    console.log(this.timer)
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log(this.timer)
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="user-card">
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Location: {this.state.userInfo.location}</h2>
        <h3>Contact: @dipakNull</h3>
      </div>
    );
  }
}

export default UserClassSecond;

/*
 *----Mounting------
 *
 * Constructor(Dummy)  ---- Define state variable
 * Render (Dummy)      ---- return jsx
 *     <HTML Dummy>
 *
 * Component Did Mount                                     --- useEffect in functional componenet
 *     <API Call>
 *     <this.setState>  --> State variable is updated
 *
 * ---- UPDATE----  (Triggered by this.setState)               --- updated state variable is returned as jsx and react runs concilation algorithm
 *       render(API Data)
 *       <HTML (new API Date)
 *       componentDidUpdate                               --- useEfect(fn) this will be called every time component is updated with no depenedency array
 *
 *----Unmounting----
 *     Component unmounts
 */

/*
If you want to conditionally run the effect only when certain props or state values change, you can specify those dependencies in the dependency array. For example:

useEffect(() => {
  This code will run after count changes
  console.log('Count has changed');
}, [count]);

before you need to define code for each state variable in componenetDidUpdate
  */
