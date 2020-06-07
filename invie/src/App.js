
import React, { Component } from 'react'
import './App.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras.jsx';
import Footer from './components/Footer.jsx';

// import logoPortada from './images/invie.png';
// import acustica from './images/invie-acustica.png';
// import classic from './images/invie-classic.png';

// const data = {
//   menu: [{
//     href: 'index.html',
//     title: 'Home',
//   }, {
//     href: '#guitarras',
//     title: 'Guitarras'
//   }, {
//     href: 'precios.html',
//     title: 'Precios',
//   }],
//   logoPortada: logoPortada,
//   guitarras: [{
//     image: acustica,
//     alt: 'Guitarra Invie Acustica',
//     name: 'Invie Acústica',
//     features: [
//       'Estilo Vintage',
//       'Madera pura',
//       'Incluye estuche invisible de aluminio'
//     ]
//   },
//   {
//     image: classic,
//     alt: 'Guitarra Invie Classic',
//     name: 'Invie Classic',
//     features: [
//       'Estilo Vintage',
//       'Liviana',
//       'empiezas tu canino como rockstar'
//     ]
//   }]
// }


class App extends Component {
  render(){
    return (
    <section className='Invie'>
      <Portada />
      {/* <Portada menu={data.menu} logo={data.logoPortada} /> */}
      {/*Portada*/}
      <Guitarras />
      {/* <Guitarras guitarras={data.guitarras} /> */
      }
      {/*Guitarras*/}
      
      <Footer />
      {/*footer*/}
    </section>
  );
}
}

export default App;
