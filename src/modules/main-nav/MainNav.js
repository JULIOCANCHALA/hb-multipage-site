// /* global DOMParser */
import template from './MainNav.pug'
import './mainnav.scss'
import {mainNav} from './../../../data/homePage.json'

export default class Mainnav {
  constructor (node) {
    this.node = node
    console.log(mainNav)
    this.node.innerHTML = template(mainNav)
  }
}
