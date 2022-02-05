import React, { Component } from "react";
import { Card, CardGroup } from "react-bootstrap";
import "./searchBar.css";

export default class CardPaste extends Component {
  render() {
    return (
      <CardGroup className="bottom-pad">
        <Card className="card-margin">
          <Card.Img variant="top" src="../../assets/placeholder.png" />
          <Card.Body>
            <Card.Title>Name of item</Card.Title>
            <Card.Text>Some extra details about the item</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">3 Available</small>
          </Card.Footer>
        </Card>
        <Card className="card-margin">
          <Card.Img variant="top" src="../../assets/placeholder.png" />
          <Card.Body>
            <Card.Title>Name of item</Card.Title>
            <Card.Text>Some extra details about the item</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">8 Available</small>
          </Card.Footer>
        </Card>
        <Card className="card-margin">
          <Card.Img variant="top" src="../../assets/placeholder.png" />
          <Card.Body>
            <Card.Title>Name of item</Card.Title>
            <Card.Text>Some extra details about the item</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">None Available</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    );
  }
}
