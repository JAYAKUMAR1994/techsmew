import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import validator from 'validator'
import './App.css';


const Home = () => {
    const [name, setName] = useState("")
    const [mobno, setMobno] = useState(null)
    const [emailError, setEmailError] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [isError, setIsError] = useState(false);
    const [errorMob, setErrorMob] = useState('')
    const [gen, setGen] = useState("")
    const [add, setAdd] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postcd, setPostcd] = useState("")

    const n = useNavigate()
    const inputRef = useRef()
    const mobRef = useRef()
    const addRef = useRef()
    const emailRef = useRef()
    const cityRef = useRef()
    const stateRef = useRef()
    const postRef=useRef()
    
    
    
    const validateEmail = (e) => {
        var email = e.target.value
      
        if (validator.isEmail(email)) {
          setEmailError('Valid Email :)')
        } else {
          setEmailError('Enter valid Email!')
        }
    }

    const validmobile = (value) => {
    
        if (validator.isMobilePhone(value)) {
            setErrorMob('Valid mobile Number:)')
        } else {
            setErrorMob('Enter Valid Number!')
        }
      }
    
    const validateDate = (value) => {
    
        if (validator.isDate(value)) {
          setErrorMessage('Valid Date :)')
        } else {
          setErrorMessage('Enter Valid Date!')
        }
      }
    
    let handleChange = () => {    
        

        if (name === '') {
            inputRef.current.focus()
        }
        else if (mobno===null) {
            mobRef.current.focus()
        }
        else if (add==='') {
            window.alert('Enter address')
            addRef.current.focus()
        }
        else if (city==='') {
            window.alert('Enter City')
            cityRef.current.focus()
        }
        else if (postcd==='') {
            window.alert('Enter Postal Code')
            postRef.current.focus()
        }
        else if (state==='') {
            window.alert('Enter State')
            stateRef.current.focus()
         }
        else if (emailError==='') {
            window.alert('Enter Email')
        }
        else {
            window.alert("success")
        n("/Main")
        }    
        
       
        
    }
  return (
      <div>
          <form>
              <fieldset>
                  <legend ><strong>Form</strong></legend>
                  <div className="child-home">                 
                  <label>Name:</label>
                      <input type="text" name="name" id='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'  minLength={5} required ref={inputRef}/><br/>             
                     
                      <label>Email: </label><input type="text" id="userEmail" 
        onChange={(e) => validateEmail(e)} ref={emailRef}></input> 
        <span >{emailError}</span><br />
                <label>Mobile Number:</label>
                      <input type="tel" className='mobno' error={isError} name="mobile" value={mobno} onChange={(e) => {
          validmobile(e.target.value);
          if (e.target.value.length > 10) {
            setIsError(true);
          }
        }} placeholder='Enter Mobile No' maxLength={10}  required ref={mobRef}/> <span >{errorMob}</span><br/>    
                
                      <label>Enter Date: </label><input type="date" className='enddt'
        onChange={(e) => validateDate(e.target.value)}></input> 
        <span >{errorMessage}</span>      <br/>

                      <label>Gender:</label>
                      <select value={gen} className='gen'>
                      <option name="male"> Male</option>
        <option name="female">Female</option>
                      </select><br/>
        
                      <label>Address:</label>
                      <textarea value={add} onChange={(e)=>setAdd(e.target.value)} className='addres' ref={addRef}>
                          
                      </textarea><br />
                      <label>City:</label>
                      <input type="text" name="city" className='city' ref={cityRef} value={city} onChange={(e) => {
                          setCity(e.target.value)
                      }} required></input><br/>
              
                      <label>State:</label>
                      <input type="text"  name="state" className='state' ref={stateRef} value={state} onChange={(e) => {
                          setState(e.target.value)
                      }} required></input><br />
                      
                      <label>Postal Code:</label>
                      <input type="text"  name="postcd" className='postcd' ref={postRef} value={postcd} minLength={6} onChange={(e) => {
                          setPostcd(e.target.value)
                      }} required></input><br/>
                      
                      <input type="submit" value="Submit" onClick={() => handleChange()}  />   
                  </div>                 
  
              </fieldset>
  
</form>
    </div>
  )
}

export default Home