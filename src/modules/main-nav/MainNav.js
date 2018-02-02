// /* global DOMParser */
import template from './MainNav.pug'
import './MainNav.scss'
import {mainNav} from './../../../data/homePage.json'

export default class Mainnav {
  constructor (node) {
    this.node = node
    console.log(mainNav)
    this.node.innerHTML = template(mainNav)
  }
}
