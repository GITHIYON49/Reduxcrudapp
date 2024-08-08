import React ,{ useContext } from 'react';
import { Pencil,Trash } from 'lucide-react';
import Button from '../button/Button';
import { UserContex } from '../../App';
import { UserData } from '../../data';

const Table = () => {

  const {personData,setPersonData} = useContext(UserContex);
  const data = [...personData];
  
  function handleDelete(i){
    let data = [...personData];
    data = data.filter((d)=> d.id !== i);
    setPersonData(data);
    
  }
  return <>
  <div className='h-[80vh] flex flex-col items-center justify-center gap-4'>
  <table className='w-3/5 text-center border-2 border-zinc-800 rounded-lg'>
    <thead>
      <tr>
        <th className='border border-zinc-400 p-3'>S/no</th>
        <th className='border border-zinc-400'>Name</th>
        <th className='border border-zinc-400'>Age</th>
        <th className='border border-zinc-400'>Update</th>
        <th className='border border-zinc-400'>Delete</th>
        </tr>
    </thead>
    <tbody>
        {
         data?.map((user,i)=>{
            return <tr key={i}>
            <td className='border border-zinc-400  p-3'>{i+1}</td>
            <td className='border border-zinc-400  p-3 capitalize'>{user.name}</td>
            <td className='border border-zinc-400  p-3'>{user.age}</td>
            <td className='border border-zinc-400 p-3'><Button className='bg-blue-500  w-4/5 ' icon={<Pencil/>}/></td>
            <td className='border border-zinc-400  p-3'><Button className='bg-red-500  w-4/5'  icon={<Trash/>} handleClick={()=>{handleDelete(user.id)}}/></td>
        </tr>
         })
        }
    </tbody>
  </table>
  <Button className='bg-green-500 w-3/5'/>
  </div>
  </>
}

export default Table