import "./App.css";
import Header from "./components/Header";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { Home } from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import AddCourse from "./components/AddCourse";
import Menus from "./components/Menus";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import EditCourse from "./components/EditCourse";

function App() {

  const btnHandle = () =>
  {
    toast.error("error!")
  }
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
            <Routes>
              <Route exact path="/"  element={<Home />}  />
              <Route exact path="/add-course"  element={<AddCourse />}  />
              <Route exact path="/view-courses"  element={<AllCourses />}  />
              <Route exact path="/edit-course/:id" element={<EditCourse />} />
            </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
      
    </div>
  );
}

export default App;
