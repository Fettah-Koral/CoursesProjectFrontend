import React, { useEffect } from 'react'
import {Button} from 'reactstrap'

export const Home = () => {
 
  useEffect(() =>{
    document.title="Home | Learn with MF"
  },[])
 
  return (
    <div className="p-3 mb-1 bg-body-tertiary rounded-3 text-center">
      <div className="container-fluid py-2">
        <h1 className="fw-bold ">Learn with MF</h1>
        <p className="col-md-12 ">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
        <Button color='primary' outline>Start Using</Button>
      </div>
    </div>
  )
}
