import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class CardContainer extends Component {
  constructor(props) {
    super(props);
  }
  increment = () => {
    this.props.handleIncrement(this.props.elt.id);
    this.props.getTotalIncrement(this.props.elt);
  };
  decrement = () => {
    this.props.handleDecrement(this.props.elt.id);
    this.props.getTotalDecrement(this.props.elt);
  };
  handleDelete = () => {
    this.props.deleteArticle(this.props.elt, this.props.elt.id);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.elt.image} />
          <Card.Body>
            <Card.Title>{this.props.elt.name}</Card.Title>

            <Button variant="primary" onClick={this.handleDelete}>
              Delete Article
            </Button>
          </Card.Body>
          <div style={{ marginLeft: "10px" }}>
            <Button variant="success" onClick={this.increment}>
              +
            </Button>
            <span style={{ fontSize: "25px" }}> {this.props.elt.qte}</span>
            <Button variant="danger" onClick={this.decrement}>
              -
            </Button>{" "}
          </div>
        </Card>
        <div>
          <h1>Price</h1>
          <h1>{this.props.elt.price}</h1>
        </div>
      </div>
    );
  }
}

export default CardContainer;
