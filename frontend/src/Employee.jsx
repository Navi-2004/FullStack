import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Employee = () => {
    const [employee,setEmployee] = useState([])
    const [name,setName] = useState('')
    const [dept,setDept] = useState('')
    const [desig,setDesig] = useState('')
    const [salary,setSalary] = useState('')
    const [address,setAddress] = useState('')
    const [dob,setDob] = useState('')
    

    useEffect(() => {
        const response=axios.get('http://localhost:5000/')
        .then((response) => {
            const data=response.data
            setEmployee(data)
        
            console.log(data)
        })
        .catch((err) => {
            console.log(err)
        })  
    },[])

    function handleSubmit(e){
        e.preventDefault();
        const employee={
            name:name,
            dept:dept,
            desig:desig,
            salary:salary,
            address:address,
            dob:dob
        }
        axios.post('http://localhost:5000/create',employee)
        .then((response) => {
            console.log(response)
            alert('Employee Added')
        })
        .catch((err) => {
            console.log(err)
        })
        window.location.reload()
    }

    const handleDelete=async(id)=>{
        
        await axios.delete('http://localhost:5000/delete/'+id)
        .then((response) => {
            console.log(response)
            alert('Employee Deleted')
        }
        )
        .catch((err) => {
            console.log(err)
        }
        )
        window.location.reload()
    }


  return (
    <div>
    <div>
        <h1>Enter Employee Details</h1>
        <form onSubmit={handleSubmit}>
            <label for="name">Name</label>
            <input  name="name" placeholder='Karthik' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <label for="dept">Department</label>
            <input  name="dept" placeholder='IT' type="text" value={dept} onChange={(e)=>setDept(e.target.value)} />
            <label for="desig">Designation</label>
            <input  name="desig" placeholder='Manager' type="text" value={desig} onChange={(e)=>setDesig(e.target.value)} />
            <label for="salary">Salary</label>
            <input  name="salary" placeholder='100000' type="number" value={salary} onChange={(e)=>setSalary(e.target.value)} />
            <label for="address">Address</label>
            <input  name="address" placeholder='Chennai' type="text" value={address} onChange={(e)=>setAddress(e.target.value)} />
            <label for="dob">Date of Birth</label>
            <input  name="dob" placeholder='1998-01-01' type="date" value={dob} onChange={(e)=>setDob(e.target.value)} />
            <button type="submit">Submit</button>

        </form>
    </div>
    <div>
        <h1>Employee Details</h1>
        <table>
            <thead>
                <th>
                    ID 
                </th>
                <th>
                    Name

                </th>
                <th>
                    Department
                </th>
                <th>
                    Designation
                </th>
                <th>
                    Salary
                </th>
                <th>
                    Address
                </th>
                <th>
                    Date of Birth
                </th>
                <th>
                    Age
                </th>
                <th>
                    Update
                </th>
                <th>
                    Delete
                </th>

            </thead>
            <tbody>
                {employee.map((emp) => {
                   const today = new Date();
                   const dobDate = new Date(emp.DOB);
                   const ageDiff = today - dobDate;
                   const ageInYears = Math.floor(ageDiff / (365.25 * 24 * 60 * 60 * 1000));

                
                    return (
                        <tr >
                            <td>{emp.id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Dept}</td>
                            <td>{emp.Designation}</td>
                            <td>{emp.Salary}</td>
                            <td>{emp.Address}</td>
                            <td>{emp.DOB}</td>
                            <td>{ageInYears}</td>
                            <td><Link to={`update/${emp.id}  `}><button>Update</button></Link></td>
                            <td><button onClick={e=>handleDelete(emp.id)}> Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>

    </div>


  )
}

export default Employee