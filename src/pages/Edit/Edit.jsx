import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Row } from 'react-bootstrap'
import './edit.css'
import profile from '../../assets/man.png'
import Select from 'react-select';

const Edit = () => {
  const [inputdata, setInputData] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    gender:'',
    locaytion:'',
  })
  const [status, setStatus] = useState("Active")
  const [image, setImage] = useState("")
  const [preview, setPreview] = useState("")

  const setInputValue=(e)=>{
    const {name,value}=e.target;
    setInputData({...inputdata,[name]:value})
    // console.log(inputdata)
  }

  const setStatusValue=(e)=>{
    setStatus(e.value)
    // console.log(status)
  }

  const setProfile=(e)=>{
    setImage(e.target.files[0])
    // console.log(image)
  }

  // submit data 
  const submitUserData=(e)=>{
    e.preventDefault();
    const { fname,lname,email, mobile,gender, location}=inputdata;
  }


  useEffect(()=>{
    if(image){
      const objectUrl = URL.createObjectURL(image)
      setPreview(objectUrl)
      // return ()=>URL.revokeObjectURL(objectUrl)
    }
  },[image])

  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];
  return (
    <>
      <div className="container">
        <h2 className="text-center mt-1">Edit Your Details</h2>
        <Card className='shadow mt-3 p-3'>
          <div className="profile_div text-center">
            <img src={preview?preview:profile} alt="" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter FirstName" name='fname'  onChange={setInputValue}/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter LastName" name='lname' onChange={setInputValue} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name='email'  onChange={setInputValue}/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" placeholder="Enter Mobile" name='mobile'  onChange={setInputValue}/>
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={`Male`}
                  name="gender"
                  value={"Male"} 
                  onChange={setInputValue}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  onChange={setInputValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Status</Form.Label>
                <Select
                  options={options}
                  onChange={setStatusValue}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control type="file" placeholder="Select Your Profile" name='user_profile' onChange={setProfile} />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail" >
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Location" name='location' onChange={setInputValue} />
              </Form.Group>
              <Button variant="warning" type="submit"
                onClick={submitUserData}
              >
                Update
              </Button>
            </Row>
          </Form>

        </Card>
      </div>
    </>
  )
}

export default Edit