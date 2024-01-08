import React, { useEffect, useState } from 'react'
import axios from 'axios';


function employees() {
    const [employees,setEmployees]=useState();
    useEffect(() => {
        const setemp=async()=>{
         const header = {Authorization: `Bearer ${localStorage.getItem('accessToken')}`};
         const data=await axios.get('http://localhost:3000/employees',{ headers:  header  });
         setEmployees(data.data);
        }
        setemp();
    }, []);
  return (
    <>
        <ul>
            {employees?.map((e)=>{
                return <li key={e._id}>
                    {e.userName}
                </li>
            })}
        </ul>
    </>
  )
}

export default employees