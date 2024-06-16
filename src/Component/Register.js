import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
   
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = { name, email, number, password };
        fetch('http://localhost:4050/register', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.message==="register successfully") {
               
                navigate('/login');
            } else {
                setMessage(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
   




  return (
   <>
   
   <div className="mt-5 pt-5">
                <form onSubmit={handleSubmit} className="w-25 m-auto bg-light text-dark p-5" action="">
                    <h3 style={{ textAlign: "center" }}>Register page</h3>
                    <label htmlFor="">Full Name</label>
                    <input onChange={(e) => { setName(e.target.value) }} className="form-control" type="text" name="" id="" />
                    <label htmlFor="">Number</label>
                    <input onChange={(e) => { setNumber(e.target.value) }} className="form-control" type="number" name="" id="" />
                    <label htmlFor="">Email</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} className="form-control" type="email" name="" id="" />
                    
                    <label htmlFor="">Password</label>
                    <input onChange={(e) => { setPassword(e.target.value) }} className="form-control" type="password" name="" id="" />
                    <Link to={'/login'}>Already have an account? <span style={{ color: "red" }}>Login here</span></Link>
                    <div className="mt-2 pt-2">
                        <button type="submit" className="btn btn-danger">Register</button>
                        {message && <div className="alert alert-danger mt-3">{message}</div>}
                    </div>
                </form>
            </div>
 
 </>
  )
}
