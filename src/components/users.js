import React from 'react'
class Users extends React.Component {
  constructor(props) {    
    super(props);
    this.state = { 
      checked: true,
      theresultsrc: null,
    }
  }		
  render() {
    let x = this.state.checked;
    console.log(x);
    return (<h1>Users {x}</h1>)
  }
}
export default Users