import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link, useParams } from "react-router-dom";

const EditCourse = () => {
  const [course, setCourse] = useState({id:"",title:"",description:""});
  const customId = "custom-id";
  const {id} = useParams();

  useEffect(() => {
    document.title = "Edit Course | Learn with MF";
    loadCourse(id);
  }, []);

  function handleForm(event){
    event.preventDefault();
    postDataToServer(course);
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
  const loadCourse = async (id) =>{
    const result = await axios.get(`http://localhost:8080/courses/${id}`);
    setCourse(result.data);
  }

  const postDataToServer = async (data) =>{
        await axios.put(`${base_url}/courses`,data).then(
            (response) =>{
                // success
                // console.log(response.data);
                toast.success("courses updated successfully", {
                    toastId: customId
                });
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
          
            <Button type="submit" className="m-2" color="success" outline>
            Update Course
            </Button>
          
          <Link className="btn btn-outline-danger mx-2" to={"/view-Courses"}>
              Cancel
          </Link>
        </Container>
      </Form>
    </Fragment>
  );
};

export default EditCourse;
