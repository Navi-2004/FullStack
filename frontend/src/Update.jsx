import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const [name,setName] = useState('')
    const [dept,setDept] = useState('')
    const [desig,setDesig] = useState('')
    const [salary,setSalary] = useState('')
    const [address,setAddress] = useState('')
    const [dob,setDob] = useState('')
    const navigate=useNavigate();
    const {id}=useParams();


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
        const response=axios.put(`http://localhost:5000/update/${id}`,employee)
        .then((response) => {
            console.log(response)
            alert('Employee Updated')
        })

        .catch((err) => {
            console.log(err)
        })
        navigate('/')
    }
  return (
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
  )
}

export default Update