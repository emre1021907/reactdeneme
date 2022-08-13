import React,{Component} from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";


class App extends Component {
  // const title = "emre kose";
  // const isAuthorized = false;

  constructor(props){
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this)

    this.state = {
      users: [
        {
        id: 1,
        name : "emre kose",
        email : "emre@hotmail.com" 
        },
        {
        id: 2,
        name : "ali kose",
        email : "ali@hotmail.com" 
        },
        {
          id: 3,
          name : "veli",
          email : "veli@hotmail.com" 
          }
      ]
  }
}

  addUser(newUser) {
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser);
    this.setState({
      users:updatedUsers
    });
  }


  deleteUser(id) {
    let  updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id !== id);
    //Stateler direct immutable
    this.setState({users:updatedUsers})
  }
  
  render() {
  return (
    <div className="container">
      <h5>User app</h5>
      <hr></hr>
      {/* <h5>{title}</h5> */}
      {/* {isAuthorized ? <p>Authorized</p> : <p>Not Authorized</p>} */}
      <AddUser addUser = {this.addUser} />
      <hr/>
      <Users deleteUser = {this.deleteUser} users = {this.state.users}/>
    </div>    
  );
}
}

export default App;
