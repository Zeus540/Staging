import Welcome from './components/Welcome'
import Header from './components/Header'
import Packages from './components/Packages'
import ClientFeedback from './components/ClientFeedback'
import Footer from './components/Footer'
import './scss/app.scss'

const App = () =>{
  document.getElementById("root").innerHTML = `
  ${Header()}

  ${Packages()}
  ${Welcome()}
  ${ClientFeedback()}

  `;
}

App();

