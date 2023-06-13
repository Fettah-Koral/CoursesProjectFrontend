import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [course, setCourse] = useState({id:"",title:"",description:""});
  const customId = "custom-id";
  let navigate = useNavigate();

  useEffect(() => {
    document.title = "Add Course | Learn with MF";
  }, []);

  function handleForm(event){
    event.preventDefault();
    postDataToServer(course);
  }

  function handleClear(){
    setCourse({id:"",title:"",description:""});
  }

  function handleChange(event){
    const {name,value} = event.target;
    setCourse(()=>{
        return {
            ...course,
            [name]:value
        }
    });
    // console.log(course);
  }

  const postDataToServer = async (data) =>{
        await axios.post(`${base_url}/courses`,data).then(
            (response) =>{
                // success
                // console.log(response.data);
                toast.success("courses added successfully", {
                    toastId: customId
                });
                navigate("/view-courses")
            },
            (error) =>{
                // error
                console.log(error);
                toast.error("Error! something went wrong", {
                    toastId: customId
                });
            }
        )
  }

  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Detail </h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <Label className="px-2" for="id">
            Course Id
          </Label>
          <Input
            type="text"
            placeholder="Enter here"
            name="id"
            id="id"
            value={course.id}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label className="px-2" for="title">
            Title
          </Label>
          <Input
            type="text"
            placeholder="Enter title here"
            name="title"
            id="title"
            value={course.title}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label className="px-2" for="description">
            Description
          </Label>
          <Input
            type="textarea"
            placeholder="Enter description here"
            id="description"
            style={{ height: 150 }}
            name="description"
            value={course.description}
            onChange={handleChange}
          />
        </FormGroup>

        <Container className="m-4 text-center">
          <Button type="submit" className="m-2" color="success" outline >
            Add Course
          </Button>
          <Button color="danger" outline onClick={handleClear}>
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCourse;
