import React, { Component } from "react";
import styles from "./glasses.module.css";
import model from "./model.jpg";

export default class Glasses extends Component {

  data = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 4,
      price: 70,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 5,
      price: 40,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 6,
      price: 60,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 7,
      price: 80,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 8,
      price: 100,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
    {
      id: 9,
      price: 60,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  state = {
    id: 1
  }

  changeState = (id) => {
    this.setState({
      id:id
    })
  }

  renderTryGlass = () => {
    const glassRender = this.data.filter((item) => {
      return item.id === this.state.id;
    })
    return (
      <img className={styles.glassImg} src={glassRender[0].url} alt={glassRender[0].name}></img>
    );
  }

  renderGlasses = () => {
    const dataRender = this.data.map((item) => {
      return(
        <div key={item.id} onClick={() => {
          this.changeState(item.id)
        }}>
          <img src={item.url} alt={item.name}></img>
        </div>
      );
    })
    return dataRender;
  }

  render() {
    return (
      <div>
        <div className={styles.background}>
          <div className={styles.header}>
            <h1>TRY GLASSESS APP ONLINE</h1>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.modelItem}>
            <div>
              <img src={model} alt="model"></img>
              {this.renderTryGlass()}
            </div>
            <div>
              <img src={model} alt="model"></img>
            </div>
          </div>
          <div className={styles.glasses}>
          <div className={styles.glassesItem}>
            {this.renderGlasses()}
          </div>
          </div>
        </div>
      </div>
    );
  }
}
