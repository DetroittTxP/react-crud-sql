
import { Form, Button, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios'
const FormInput = ( props ) => {
  
   const [studentid,Setstudentid] = useState('')  
   const [name,Setname] = useState('')  
   const [lastname,Setlastname] = useState('')  
   const [email,Setemail] = useState('')  
   const [faculty,Setfaculty] = useState('')  
   const [ressult,Setresult ] = useState([]);

   const insert= async ()=>{
          await axios.post('http://localhost:4444/insert',{studentid,name,lastname,email,faculty})
          .then(res=>{
               Setresult(res.data)
               console.log(ressult);
               
               const newdata = {
                    student_id:studentid,
                    fname:name,
                    lname:lastname,
                    email:email,
                    facuty:faculty
               }

               props.getnewkid(newdata);
          })
          .catch(err => alert(err))
   }

  return (
    <div>
      <div className='form'>
        <h2>INSERT YOUR INFO</h2>
        <br/>

        <Form
          onFinish={insert}
          >
             <Form.Item label="Student ID">
                  <Input onChange={e=>Setstudentid(e.target.value)} style={{width:200}}/>
             </Form.Item>

             <Form.Item labelCol={{span:1}} label="Name">
                  <Input onChange={e=>Setname(e.target.value)} style={{width:200}}/>
             </Form.Item>
             
             <Form.Item labelCol={{span:1}} label="Lastname">
                  <Input onChange={e=>Setlastname(e.target.value)} style={{width:200}}/>
             </Form.Item>

             <Form.Item labelCol={{span:1}} label="Email">
                  <Input onChange={e=>Setemail(e.target.value)} style={{width:200}}/>
             </Form.Item>
             <Form.Item  labelCol={{span:1}} label="Faculty">
                  <Input onChange={e=>Setfaculty(e.target.value)} style={{width:200}}/>
             </Form.Item>

             <Button type='primary' htmlType='submit'>INSERT</Button>
        </Form>

      </div>
    </div>
  )
}
export default FormInput;