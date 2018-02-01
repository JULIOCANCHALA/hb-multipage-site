import Mainnav from './modules/main-nav/Main-nav.js'
import './main.scss'
import '../node_modules/reset-css/_reset.scss'
import { mainNav } from '../data/homePage.json'

// eslint-disable-next-line
const Nav = new Mainnav(document.querySelector('.main'), mainNav)
