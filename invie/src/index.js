import React from 'react';
import ReactDOM from 'react-dom';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';
import * as serviceWorker from './serviceWorker';
import logoPortada from './images/invie.png'
import acustica from './images/invie-acustica.png'
import classic from './images/invie-classic.png'

const data = {
  menu: [{
    href: 'index.html',
    title: 'Home',
  }, {
    href: '#guitarras',
    title: 'Guitarras'
  }, {
    href: 'precios.html',
    title: 'Precios',
  } ],
  logoPortada: logoPortada,
  guitarras: [{
    image: acustica,
    alt: 'Guitarra Invie Acustica',
    name: 'Invie Acústica',
    features: [
      'Estilo Vintage',
      'Madera pura',
      'Incluye estuche invisible de aluminio'
    ]
  } ,
  {
    image: classic,
    alt: 'Guitarra Invie Classic',
    name: 'Invie Classic',
    features: [
      'Estilo Vintage',
      'Liviana',
      'empiezas tu canino como rockstar'
    ]
}]
}
ReactDOM.render(
  <React.StrictMode>
    <section className='invie'>
      <Portada menu={data.menu} logo={data.logoPortada} />
      {/*Portada*/}
      <Guitarras guitarras={data.guitarras} />
      {/*Guitarras*/}
      <Footer/>
      {/*footer*/}
    </section>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
