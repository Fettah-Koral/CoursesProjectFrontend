import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";


function Course({course,update}) {

  const customId = "custom-id";

  const deleteCourse =
     async (id) =>{
      await axios.delete(`${base_url}/courses/${id}`).then(

        (response) =>{
          // console.log(response.data);
          update(id);
          toast.success("The Course successfully deleted",{
            toastId:customId
          })
        },
        (error) =>{
          console.log(error);
          toast.error("Error! The Course not deleted ,Server problem",{
            toastId:customId
          })
        }
        )
     }
  


  return (
    <Card
      body
      outline
      style={{
        textAlign:"center",
        position:"relative",
        width:"100%"
      }}
    >
      <CardBody>
        <CardSubtitle className="fw-bold" tag="h5" > 
          {course.title}
        </CardSubtitle>
        <CardText className="font-weigth-bold mt-2" tag="p" >
          {course.description}
        </CardText>
        <Container className="text-center">
          <Link className="btn btn-warning mx-2" to={`/edit-course/${course.id}`}>Update</Link>
          <Button color="danger" className="m-3" onClick={()=>{deleteCourse(course.id)}}>Delete</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
