import User from "./User";
import UserClass from "./UserClass";
import UserClassSecond from "./UserClassSecond";
import React from "react"

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount(){
    console.log("Parent componentDidMount")
  }

  render(){
    return (<>
    <UserClassSecond/>
    </>);
  }

}


// render() {
//   console.log("Parent Render");
//   return (
//     <div>
//       {/* <User name="DK function" location="Goa" /> */}
//       <UserClass name="First Child" location="FirstGoa" />
//       <UserClass name="Second Child" location="SecondMumbai" />

//     </div>
//   );
// }


/*

- Parent Constructor
- Parent Render

    - Child1 Constructor
    - Child1 Render

    - Child2 Constructor
    - Child2 Render

    <DOM Updated - In Single Batch>
    - Child1 ComponenetDidMount
    - Child2 ComponenetDidMount
- Parent ComponenetDidMount

*/

// Reference  :- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

// const About = () => {
//   return (
//     <div>
//       <User name="DK function" location="Goa" />
//       <UserClass name="DK Class" location="Goa" />
//     </div>
//   );
// };

export default About;
