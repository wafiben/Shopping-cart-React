import React, { Component } from "react";
import Card from "./Card";

class ListOfArticle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.ItemsWithSum.articles.map((elt) => (
          <Card
            key={elt.id}
            elt={elt}
            handleIncrement={this.props.handleIncrement}
            handleDecrement={this.props.handleDecrement}
            getTotalIncrement={this.props.getTotalIncrement}
            getTotalDecrement={this.props.getTotalDecrement}
            deleteArticle={this.props.deleteArticle}
          />
        ))}
        <hr />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>Total sum</h1>
          <h1>{this.props.ItemsWithSum.sum}</h1>
        </div>
      </div>
    );
  }
}

export default ListOfArticle;
