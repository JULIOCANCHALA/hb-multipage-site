import Mainnav from './modules/main-nav/mainnav.js'
import Hero from './modules/hero/hero.js'
import './main.scss'
import '../node_modules/reset-css/_reset.scss'

// eslint-disable-next-line
const Nav = new Mainnav(document.querySelector('.main'))
// eslint-disable-next-line
const Hero_one = new Hero(document.querySelector('.main'))
