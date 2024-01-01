import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';



function App() {
  const[name,setname] = useState('')
  const[isname,setisname] = useState(true)

  const[email,setemail] = useState('')
  const[isemail,setisemail] = useState(true)

  const[pswd,setpswd] = useState('')
  const[ispswd,setispswd] = useState(true)

  const[cpswd,setcpswd] = useState('')
  const[iscpswd,setiscpswd] = useState(true)

  const namevalidate = (e)=>{
    const value = e.target.value
      if(!!value.match(/^[a-z . A-Z]{2,30}$/)){
        setname(value)
        setisname(true)
      }
      else{
        setname(value)
        setisname(false)
      }
  }

  const emailvalidate = (n)=>{
    
    const value = n.target.value
    if(!!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      setemail(value)
      setisemail(true)
    }
    else{
      setemail(value)
      setisemail(false)
    }
  }

  const pswdvalidate = (e)=>{
    const value =  e.target.value
    if(!!value.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)){
      setpswd(value)
      setispswd(true)
    }
    else{
      setpswd(value)
      setispswd(false)
    }
  }

  const validateconfirmpswd = (e)=>{
    const value = e.target.value
    if(!!value.match(pswd)){
      setcpswd(value)
      setiscpswd(true)
    }
    else{
      setcpswd(value)
      setiscpswd(false)
    }
  }

  const handlesignin = ()=>{
  if(!name || !email || !pswd || !cpswd){
    alert('please fill the full form')
  }
  else if(pswd !== cpswd){
    alert('Password is incorrect')
  }
  else if(!isname || !isemail || !ispswd){
    alert('Input is not satisfying the condition')
  }
  else{
    alert(`
           User name is ${name}
           User email id is ${email}
           User Password is ${pswd}`)
  }
  }


  

  return (
   <>
   <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'> 
   <div className='bg-light p-5 rounded' style={{width:'600px'}}> 
     <h1 className='text-center'>Registration Form</h1>
   <form className='mt-5' >

   <TextField value={name || ''}  onChange={(e)=>namevalidate(e)} id="filled-basic" className='w-100' label="Name" variant="filled"/> 
      {!isname && 
       <div>
       <p className='text-danger'>Invalid Name</p>
       <p className='text-danger'>Name should be in 2 to 30 characters</p>
      </div>}

   <TextField value={email || ''} onChange={(n)=>emailvalidate(n)} id="filled-basic" className='w-100 mt-3' label="E-mail" variant="filled" /> 
      {!isemail && 
         <div>
          <p className='text-danger'>Invalid E-mail id</p>
      </div>}

   <TextField value={pswd || ''} onChange={(e)=>pswdvalidate(e)} id="filled-basic" className='w-100 mt-3' label="Password" variant="filled" /> 
     {!ispswd && 
         <div>
          <p className='text-danger'>Password needs minimum 8 characters with at least a symbol, upper and lower case letters and a number</p>
      </div>}
      {ispswd && pswd &&
       <div>
       <p className='text-success'>Strong Password</p>
      </div>
      }

   <TextField value={cpswd || ''} onChange={(e)=>validateconfirmpswd(e)} id="filled-basic" className='w-100 mt-3' label="Confirm Password" variant="filled"/>
      {!iscpswd && 
         <div>
          <p className='text-danger'>Password is not matching</p>
      </div>}

   <Button  onClick={handlesignin} className='mt-3 d-flex justify-content-center align-items-center w-100 p-3 rounded flex-column' style={{width:'100px',height:'50px'}} variant="contained">Sign in</Button>
          
   </form>
   </div>
   </div>
   </>
  );
}

export default App;
