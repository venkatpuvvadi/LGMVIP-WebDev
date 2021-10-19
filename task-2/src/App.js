import React ,{ useState } from "react";
import {Table} from 'reactstrap';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
var link=["https://reqres.in/api/users?page=1","https://reqres.in/api/users?page=2"];
var i=0;
function App(){
  const[cirin,cirfin]=useState(0);
  const [users,setUsers]=useState([]);
  async function load()
  { 
    cirfin(1);
    fetch(link[i])
    .then((response) => response.json())
    .then((json) => {
      console.log(json.data)
      setUsers(json.data); // Prints result from `response.json()` in getRequest
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setTimeout(function(){
      cirfin(0);
      },2000);/*for change of value cirin*/
    i>=1?i=0:i++;/*for increament of array*/
  };
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
        {cirin  ?'':<button onClick={load}>GET USERS</button>};
        <span>LGMVIP-WebDev Task 2</span>
        </nav>
        </header>
        {cirin ?
        <div className='circle'>
        <CircularProgress color='secondary' size='50px'/>    
        </div>
            : 
        <div>
      {users.map((data) => {
            return (
              <div className='card'>
                <img src={data.avatar} alt='profilepic' className="propic"></img>
                <Table>
                <tr>
                  <th>First Name:</th>
                  <td>{data.first_name}</td>
                </tr>
                <tr>
                  <th>Last Name:</th>
                  <td>{data.last_name}</td>
                </tr>
                <tr>
                  <th>Email ID:</th>
                  <td>{data.email}</td>
                </tr>
                </Table>
              </div>
            );
          })}
      </div> 
        }
    </div>
  );
}
export default App;
