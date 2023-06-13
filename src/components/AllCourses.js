import React, { useEffect, useState } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllCourses = () => {

    const [courses,setCourses] = useState([]);
    const customId = "custom-id";


    useEffect(() =>{
      document.title="All Courses | Learn with MF"
    },[])

    const getAllCoursesFromServer= async () =>{
      await axios.get(`${base_url}/courses`).then(
        (response) =>{
          //success
          // console.log(response.data);
          toast.success("courses has been loaded", {
            toastId: customId
          });
          setCourses(response.data);
        },
        (error) =>{
          //error
          console.log(error);
          toast.error("something went wrong",{
            toastId: customId
          });
        }
      );
    };

    const updateCourses = (id) =>{
      setCourses(courses.filter((c)=> c.id!==id))
    }

    //calling loading course funciton
    useEffect(()=>{
      getAllCoursesFromServer();
    },[])

  return (
    <div>
        <h1>AllCourses</h1>
        <p>List of courses are as follows</p>
        {   
          courses.length>0?
            courses.map((course,index) =>{
                return(
                <Course 
                  key={index}  
                  course={course} 
                  update={updateCourses}
                />);
            })
            : "No Course"
        }
    </div>
  )
}

export default AllCourses