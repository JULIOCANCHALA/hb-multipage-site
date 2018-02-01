/* global DOMParser */
import './Main-nav.scss'
import templatePug from './Main-nav.pug'

export default class Mainnav {
  constructor (node, data) {
    this.data = data
    this.node = node
    this.DOM()
  }
  DOM () {
    const domParser = new DOMParser()
    const templateNav = domParser.parseFromString(templatePug, 'text/html').body.children[0]
    this.node.appendChild(templateNav)
  }
}
