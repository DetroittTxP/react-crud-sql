import { useEffect,useState } from "react"
import axios from 'axios'
import {Button, Card,Space} from 'antd'


const Student = ( props )=>{

    const [Show,Setshow] = useState(false);
    return(
        <div className="data">
            <Button onClick={()=>Setshow(!Show)} danger>SHOW STUDENT</Button><br/><br/>
               {Show && (
                  <>

                    <h3>Student data</h3>
                <Space  direction="horizontal" size={16}>
                {props.data.map((value,index)=>(
                   
                    <Card 
                    id="card"
                    title={`Student ID: ${value.student_id}`}
                    style={{
                        width: 300,
                    }}
                    >
                    <p>Name: {value.fname}</p>
                    <p>Lastname: {value.lname}</p>
                    <p>Email: {value.email}</p>
                    <p>Faculty: {value.faculty}</p>     
                    </Card>
                ))}
                 </Space>
                  </>
               )}
        </div>
    )
}

export default Student;