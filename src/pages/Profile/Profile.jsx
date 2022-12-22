import React from 'react'
import { Card, Row } from 'react-bootstrap'
import profile from '../../assets/mans.jpg'
import './profile.css'


const Profile = () => {
  return (
    <div className="container">
      <Card className='card-profile shadow col-lg-6 mx-auto mt-5'>
        <Card.Body>
          <Row>
            <div className="col">
            <div className="card-profile-stats d-flex justify-content-center ">
            <img src={profile} alt="" />

            </div>
            </div>
          </Row>
          <div className="text-center">
          <h3>Technical Abhi</h3>
          <h4><i className="fa-solid fa-envelope email"></i>&nbsp;:- sahniak56@gmail.com</h4>
          <h5><i className="fa-solid fa-mobile mobile"></i>&nbsp;:-8757419868</h5>
          <h5><i className="fa-solid fa-person gender"></i>&nbsp;:-Male</h5>
          <h5><i className="fa-solid fa-location-dot location"></i>&nbsp;:-Bhopal</h5>
          <h5><span className="status">Status</span> &nbsp;:- Active</h5>
          <h5><i className="fa-solid fa-calendar-days calender"></i>&nbsp;Date Created:-23-12-2022</h5>
          <h5><i className="fa-solid fa-calendar-days calender"></i>&nbsp;Date Updated:-20-05-2023</h5>
          
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile