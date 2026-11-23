import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import RegistrationForm from "./components/RegistrationForm";
import { useState } from "react";

export default function App()
{
  //1
  const [users] = useState([
    { id: 1, name: "Alice", age: 30 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 35 },
    { id: 4, name: "David", age: 40 },
  ]);

  //2
  const [theme,setTheme] = useState('white');
  const lightStyle = {
    backgroundColor: '#f8fafc',
    color: 'black',
    padding: '16px',
    borderRadius: '8px'
  };
  const darkStyle = {
    backgroundColor: '#1c1f22',
    color: 'white',
    padding: '16px',
    borderRadius: '8px'
  };


  const changeTheme = (isWhite) => {
    if(isWhite) setTheme("white");
    else setTheme("dark");
  }

  return(
  <div style={theme==='white'?lightStyle:darkStyle}>
  <Task1 users={[...users]} />
  <Task2 sentData={changeTheme} />
  <RegistrationForm />  
  </div>
  
  );
}