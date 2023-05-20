import React from "react";

import { Button, Card } from "react-bootstrap";
import avatar from "../assets/img/avatar-svgrepo-com-black.svg";

import '../css/Person.css'

const Person: React.FC = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>Обо мне</Card.Title>
        <Card.Text>
          Я классный человек!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Person;
