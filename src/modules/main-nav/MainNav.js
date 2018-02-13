// /* global DOMParser */
import template from './main_nav.pug'
import './main_nav.scss'
import {mainNav} from './../../../data/homePage.json'

export default class Mainnav {
  constructor (node) {
    this.node = node
    this.node.innerHTML = template(mainNav)
    this.elements = {}
    this.start()
    this.setClicks()
  }

  start () {
    this.elements.hamIcon = this.node.querySelector('.hamburguer-icon-btn')
    this.elements.menu = document.querySelector('.menu')
    this.elements.btnsMenu = document.querySelectorAll('.menu__item--btn')
    this.elements.subItems = document.querySelectorAll('.menu__item--sub')
  }
  setClicks () {
    this.elements.hamIcon.addEventListener('click', () => {
      this.elements.menu.classList.toggle('menu--visible')
    })

    this.elements.btnsMenu.forEach(element => {
      element.addEventListener('click', this.opensubMenu.bind(this))
    })
  }
  opensubMenu (event) {
    console.log(event.target.textContent)
    this.elements.subItems.forEach(element => {
      console.log(element.dataset)
    })
  }
}
