// /* global DOMParser */
import template from './main_nav.pug'
import './main_nav.scss'
import {mainNav} from './../../../data/homePage.json'

export default class Mainnav {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(mainNav)
  }
}
