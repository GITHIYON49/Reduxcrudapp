import './App.css';
import { useState,useEffect } from 'react';
import { createContext } from 'react';
import { Route,Routes,useParams } from 'react-router-dom';
import { Home,AddUser,EditUser } from './pages';
import { Navbar } from './components';
import { UserData } from './data';

export const UserContex = createContext();

function App() {
  const[personData,setPersonData]= useState([...UserData]);
  const[name,setName] = useState('');
  const[age,setAge] = useState('');
  const[id,setUserId] = useState(0);
  const params = useParams();

  useEffect(()=>{
    const ids = personData.length + 1;
    setUserId(ids);

  },[personData])

  // function handleEdit(i){
  //   let data = [...personData];
  //   let newData = 

  // }
 
  return <>
  <div>
  <Navbar/>
  <UserContex.Provider value={{personData ,setPersonData,name,setName,age,setAge,id}}>
  <Routes>
    <Route path={'/'} element={<Home/>}/>
    <Route path={'/addUser'} element={<AddUser/>}/>
    <Route path={'/editUser/:id'} element={<EditUser/>}/>
  </Routes>
  </UserContex.Provider>
  </div>
  </>
}

export default App;
