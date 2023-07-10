import React, { Component } from "react";
import ListOfArticle from "./Components/ListOfArticle";
class componentName extends Component {
  state = {
    articles: [
      {
        id: 0,
        name: "ipod",
        price: 55,
        qte: 0,
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-11-select-202104_GEO_FR_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617865124000",
      },
      {
        id: 1,
        name: "pc",
        price: 25,
        qte: 0,
        image:
          "https://media.mytek.tn/media/wysiwyg/categ-ordinateur-potable/pc-portable-1.jpg",
      },
    ],
    sum: 0,
  };

  handleIncrement = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id === id) {
          return {
            ...elt,
            qte: elt.qte + 1,
          };
        } else {
          return elt;
        }
      }),
    });
  };
  getTotalIncrement = (article) => {
    this.setState({ sum: this.state.sum + article.price });
  };
  getTotalDecrement = (article) => {
    if (article.qte > 0) {
      this.setState({ sum: this.state.sum - article.price });
    }
  };
  handleDecrement = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        } else {
          return elt;
        }
      }),
    });
  };
  deleteArticle = (elt, id) => {
    this.setState({
      ...this.state,
      articles: this.state.articles.filter((elt) => elt.id !== id),
      sum: this.state.sum - elt.price * elt.qte,
    });
  };

  render() {
    return (
      <div>
        <ListOfArticle
          ItemsWithSum={this.state}
          handleIncrement={this.handleIncrement}
          handleDecrement={this.handleDecrement}
          getTotalIncrement={this.getTotalIncrement}
          getTotalDecrement={this.getTotalDecrement}
          deleteArticle={this.deleteArticle}
        />
      </div>
    );
  }
}

export default componentName;
