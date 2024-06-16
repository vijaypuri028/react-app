import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logincontext } from '../Logincontext'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const {loginStatus,setLoginStatus,name,setName} = useContext(Logincontext)

    function handelLogin(e) {
        e.preventDefault();
        const formData = { email, password };
        fetch('http://localhost:4050/login', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.message === "login successfully ") {
                    navigate('/');

                    if (data.data.email === "Adminvijay@gmail.com"){
                        navigate('/adminpage')

                    }
                    else{
                        localStorage.setItem('loginStatus',1)
                        localStorage.setItem('username',data.data.name)


                        setLoginStatus(localStorage.getItem('loginStatus'))
                        setName(localStorage.getItem('userName'))
                    }
                     }

                     
                else {
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
                <form onSubmit={handelLogin} className="w-25 m-auto bg-light text-dark p-5" action="">
                    <h3 style={{ textAlign: "center" }}>Login page</h3>

                    <label htmlFor="">Email</label>
                    <input onChange={(e) => { setEmail(e.target.value) }} className="form-control" type="email" name="" id="" />

                    <label htmlFor="">Password</label>
                    <input onChange={(e) => { setPassword(e.target.value) }} className="form-control" type="password" name="" id="" />
                    <Link to={'/register'}>Already have an account? <span style={{ color: "red" }}>Register here</span></Link>
                    <div className="mt-2 pt-2">
                        <button type="submit" className="btn btn-danger">Login</button>
                        {message && <div className="alert alert-danger mt-3">{message}</div>}
                    </div>
                </form>
            </div>





        </>
    )
}
