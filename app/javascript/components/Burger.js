import React, { Component } from 'react';
import * as serverSync from './serverSync';

import './Burger.scss'
import bunTop from './images/bun-top.png';
import bunBottom from './images/bun-bottom.png';
import cheese from './images/cheese.png';
import lettuce from './images/lettuce.png';
import patty from './images/patty.png';
import tomatoes from './images/tomatoes.png';

export default class Burger extends Component {
  state = {
    burgerLayers: []
  }

  componentDidMount() {
    serverSync
      .get('burgerLayers')
      .then(({ burgerLayers }) => this.setState({ burgerLayers }))
  }

  componentDidUpdate() {
    serverSync
      .save('burgerLayers', this.state.burgerLayers)
      .then(({ message }) => console.log(message))
  }

  addLayer = (e) => {
    const { burgerLayers } = this.state
    const button = e.target.tagName.toLowerCase() === 'img' ?
      e.target.parentElement :
      e.target
    this.setState({ burgerLayers: [...burgerLayers, button.name] })
  }

  removeLayer = (e) => {
    const { burgerLayers } = this.state
    const indexToRemove = e.target.name
    this.setState({ burgerLayers: burgerLayers.filter((l, i) => i != indexToRemove) })
  }

  getImageForLayer(layer) {
    switch (layer) {
      case "bunTop": return bunTop
      case "bunBottom": return bunBottom
      case "cheese": return cheese
      case "lettuce": return lettuce
      case "patty": return patty
      case "tomatoes": return tomatoes
    }
  }

  render() {
    const { burgerLayers } = this.state
    return (
      <div className="Burger">
        <div className="controls" onClick={this.addLayer}>
          <button name='bunTop'><img src={bunTop} /></button>
          <button name='bunBottom'><img src={bunBottom} /></button>
          <button name='cheese'><img src={cheese} /></button>
          <button name='lettuce'><img src={lettuce} /></button>
          <button name='patty'><img src={patty} /></button>
          <button name='tomatoes'><img src={tomatoes} /></button>
        </div>
        <div className="render-burger">
          {burgerLayers.map((layer, i) => <img key={i} name={i} className={layer} onClick={this.removeLayer} src={this.getImageForLayer(layer)} />)}
        </div>
      </div>
    )
  }
}