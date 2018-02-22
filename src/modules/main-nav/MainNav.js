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
    this.elements.hamIconItems = this.node.querySelectorAll('.hamburguer-icon-item')
    this.elements.menu = document.querySelector('.menu')
    this.elements.btnsMenu = document.querySelectorAll('.menu__item--btn')
    this.elements.subContainers = document.querySelectorAll('.menu__container-sub')
  }
  setClicks () {
    this.elements.hamIcon.addEventListener('click', () => {
      this.elements.menu.classList.toggle('menu--visible')
      this.elements.hamIconItems[0].classList.toggle('hamburguer-icon-item--item1')
      this.elements.hamIconItems[1].classList.toggle('hamburguer-icon-item--item2')
      this.elements.hamIconItems[2].classList.toggle('hamburguer-icon-item--item3')
    })

    this.elements.btnsMenu.forEach(element => {
      element.addEventListener('click', this.opensubMenu.bind(this))
    })
  }
  opensubMenu (event) {
    this.elements.subContainers.forEach(element => {
      const newheight = (element.childElementCount * 50).toString() + 'px'
      const nameparent = element.dataset.parent + ' ▼'
      if (nameparent === event.target.textContent) {
        element.classList.toggle('menu__container-sub--colapsed')
        element.style.height = element.style.height === newheight ? '' : newheight
      }
    })
  }
}
