
import Slide from '../assets/images/slide.png';

import Base from '../assets/images/base.png';
import Mag from '../assets/images/mag.png';
const Header = () => {
  
	const template = `

    <div class="container">


  <h1 class="Heading">GLOCK 19X</h1>
    <div class="glock">
      <div id="slideHolder" >
    <img src=${Slide}  class="slide piece"  alt="slide">
  </div>
      <img src="https://assets.codepen.io/16327/teardown-barrel.png" class="barrel piece" alt="barrel">
      <img src="https://assets.codepen.io/16327/teardown-spring.png" class="spring piece" alt="spring">
      <img src=${Base} class="base piece" alt="base">
    <div id="magholder">
      <img src=${Mag} class="mag piece" alt="mag">
    </div>
    </div>
    </div>
  <div class="btngrp">
    <button id="break"><h1>Strip</h1></button>
    <button id="reload"><h1>LOAD</h1></button>

    <button id="Assemble"><h1>ASSEMBLE</h1></button>
    <button id="blue"></button>
    <button id="black"></button>
  </div>
  `;

	return template;
};

export default Header;
