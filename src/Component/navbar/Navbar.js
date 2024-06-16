import React, { useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Logincontext } from '../../Logincontext'

export default function Navbar() {


   
  
  const {loginStatus,setLoginStatus,name,setName}=useContext(Logincontext)
  const navigate=useNavigate()


  function handelremove(e){
    localStorage.removeItem('loginStatus')
    localStorage.removeItem('name')


    setLoginStatus(localStorage.getItem('loginStatus'))
    setLoginStatus(localStorage.getItem('name'))
    
    navigate('/login')
  }
  return (
    <>

    {/* {

      name? */}


   

    <nav style={{position:"fixed",top:"0",left:"0",zIndex:"999",width:"100%"}} className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div  className="container-fluid ">
    <Link className="navbar-brand fs-3  text-danger" href="#"><i class="bi bi-bing me-2 "></i>ROCK  WORLD</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ms-5" aria-current="page" to='/'>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to='/'>LINK</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to='/about'>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to='/'>CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to='/'>PRODUCT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-4" aria-current="page" to='/'>SHOPPING</Link>
        </li>
       
      </ul>
      <div style={{display:"flex",justifyContent:"end"}} className='social-media'>
      <Link className="btn btn-danger me-4"  to='/register'>REGISTER</Link>
      <Link className="btn btn-danger"  to='/login'>LOGIN</Link>

      <Link onClick={(e)=>{handelremove(e)}} ><i class="bi bi-box-arrow-right">out</i></Link>
        


      </div>
      


    </div>
  </div>
</nav>
 {/* :

<h1>login first</h1>




}  */}


    </>
  )
}
