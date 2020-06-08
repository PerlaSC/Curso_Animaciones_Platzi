import React from 'react';
import ReactDOM from 'react-dom';
import Invie from './App'
import './css/invie.css';
// import * as serviceWorker from './serviceWorker';
import './css/animations.css'
import cheet from 'cheet.js';
import {Provider} from 'react-redux'
import { createStore } from 'redux'
import logoPortada from './images/invie.png';
import acustica from './images/invie-acustica.png';
import classic from './images/invie-classic.png';
import easterA from './images/easter-a.png'
import easterB from './images/easter-b.png'


const initialState = {
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
    alt: 'Guitarra padre de familia',
    name: 'Invie Familiar',
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
    }
  ]
}
function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS':{
      const newProps = action.payload.props
      return {...state, ...newProps}
    }
    default:
      return state
  }
}
const store = createStore(reducer, initialState);
const easter= {
  menu: [{
    href: 'index.html',
    title: 'Home',
  }],
  guitarras:[
    {
      image: easterA,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acústica',
      features: [
        'Lista para copiar a los Simpsons',
        'Aire puro',
        'Chistes malos'
      ]
    },
    {
      image: easterB,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo Vintage',
        'Liviana',
        'empiezas tu canino como rockstar'
      ]
    }
  ]
}
cheet('i n v i e', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  })
   
})
cheet('g o b a c k', () => {
  store.dispatch({
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState,
    }
  })
})


ReactDOM.render(
   <Provider store={store}>
    <Invie />
   </Provider> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
