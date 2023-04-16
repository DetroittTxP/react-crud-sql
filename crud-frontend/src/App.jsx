import { useState,useEffect } from 'react'
import './App.css'
import Form from './form'
import Student from './student'
import axios from 'axios'


function App() {

  // const [newstudent,Setnewstudent] = useState([]);
  const [data,Setdata] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4444/getdata')
    .then(res=>{
        Setdata(res.data)
    })
    .catch(err => alert(err))
},[])


  const getnewstudent =(newkid)=>{
        Setdata(prev=>{
          return [newkid,...prev]
        })
  }

  return (

    <div >
        <Form getnewkid={getnewstudent}/>
        <hr/>
        <Student data={data} />
    </div>
  )
}

export default App
