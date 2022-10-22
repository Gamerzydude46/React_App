import React from 'react'
import { useForm } from 'react-hook-form';


type Profile = {
  name:string
  email:any
  password:any
}
const Form = () => {

  const {register, handleSubmit, formState: { errors }} = useForm<Profile>();
  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })
  return <div >
            <form className='flex flex-col space-y-5' onSubmit={onSubmit}>
               <h1 className='heading'>React Form</h1>
               <div>
                  <label htmlFor='name' className='label'>Name</label>
                  <input {...register("name",{required:true})} 
                  id='name' 
                  name='name'
                  type='text' />
                  {
                    errors.name && <p className='warn'>Enter Your Name</p>
                  }
               </div>

               <div >
                  <label htmlFor='email' className='label'>Email</label>
                  <input {...register("email",{required:true})} 
                  id='email' 
                  name='email' 
                  type='email' />
                  {
                    errors.email && <p className='warn'>Enter Your Email</p>
                  }

               </div>

               <div >
                  <label htmlFor='password' className='label'>Password</label>
                  <input {...register("password",{required:true})} 
                  id='password' 
                  name='password' 
                  type='password' />
                  {
                    errors.password && <p className='warn'>Enter Your Password</p>
                  }
               </div>
              
               <button className='text-slate-800 text-sm font-bold bg-react-blue rounded-sm py-1 w-60' >Submit</button>
             
            </form>
         </div>
}

export default Form
