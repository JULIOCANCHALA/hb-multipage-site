import template from './hero.pug'
import './hero.scss'
import {hero} from './../../../data/homePage.json'

export default class Hero {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(hero)// Change for work with DOM
  }
}
