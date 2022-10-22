import React, {useState, useEffect} from 'react'
import { Users } from '../models/Users'
import { UsersServices } from '../services/UserService'

interface UserData{
 
   loading:boolean,
   users:Users[],
   errorMSg:string

}
const Api:React.FC = () => {

  const [state,setState] = useState<UserData>({
    
       loading:false,
       users:[] as Users[],
       errorMSg:''

  })

  useEffect(() => {
       
    setState({...state,loading:true})
       UsersServices.getAllUsers().then(res => setState({

         ...state, loading:false, users:res.data

       })).catch(err => setState({

             ...state, loading:false, errorMSg:err.message

       }));
       //eslint-disable-next-line
  },[])

 const {loading, users, errorMSg} = state
  return  <div>
               <h1 className='heading'>React API</h1>
               {errorMSg && (<p className='warn'>{errorMSg}</p>)}
               {loading && <p className='text-green-500 text-lg'>Loading.....</p>}
               <table className='text-white font-medium'>
                 <thead>
                  <tr className=''>
                     <td className='tablehead'>ID </td>
                     <td className='tablehead'>NAME</td>
                     <td className='tablehead'>USERNAME</td>
                     <td className='tablehead'>EMAIL</td>
                  </tr>
                 </thead>
                 <tbody>
                  {
                    users.length > 0 && users.map(user => (
                       <tr key={user.id}>
                          <td className='p-2'>{user.id}</td>
                          <td className='p-2 text-blue-400'>{user.name}</td>
                          <td className='p-2 text-emerald-300'>{user.username}</td>
                          <td className='p-2 text-orange-400'>{user.email}</td>
                      </tr>
                    ))
                  }
                 </tbody>
               </table>
          </div>
}

export default Api
