import React,{ useContext }  from 'react'
import { Label,Input,Button } from '../../components';
import { UserContex } from '../../App';

const EditUser = () => {
  const{name,setName,age,setAge} = useContext(UserContex);
  return <>
   <section className="w-full flex items-center justify-center mt-5">
      <form className="w-3/5 flex flex-col gap-3 items-center">
        <div className="w-4/5">
          <Label labelName={`Name`} />
          <Input value={name} placeholder={`Enter your name`} onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="w-4/5">
          <Label labelName={`Age`}  />
          <Input value={age} placeholder={`Enter your Age`}  onChange={(e)=>{setName(e.target.value)}} />
        </div>
        <div className="w-4/5">
          <Button className='bg-blue-500 w-full' />
        </div>
      </form>
      </section>

  </>
}

export default EditUser;