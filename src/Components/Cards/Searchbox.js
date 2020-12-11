import React from "react";
import Form from "react-bootstrap/Form";
import "./style.css";

function Searchbox({ searchChange }) {
  return (
    <div id="projects">
      <Form className="center form">
        <Form.Row className="searchbox">
          <Form.Control
            type="text"
            placeholder="search projects"
            onChange={searchChange}
          />
        </Form.Row>
      </Form>
    </div>
  );
}

export default Searchbox;
