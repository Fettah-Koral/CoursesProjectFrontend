import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div>
      <ListGroup >
        <Link className="list-group-item list-group-item-action" to="/" tag="a" >Home</Link>
        <Link className="list-group-item list-group-item-action" to="/add-course" tag="a" >Add Course</Link>
        <Link className="list-group-item list-group-item-action" to="/view-courses" tag="a" >View Courses</Link>
        <Link className="list-group-item list-group-item-action" to="#" tag="a" >About</Link>
        <Link className="list-group-item list-group-item-action" to="#" tag="a" >Contact</Link>
      </ListGroup>
    </div>
  );
};

export default Menus;
