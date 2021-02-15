
import Header from './components/Header'
import Section1 from './components/Section1'

import './scss/app.scss'

const App = () =>{
  document.getElementById("root").innerHTML = `
  ${Header()}

  
  `;
}

App();

