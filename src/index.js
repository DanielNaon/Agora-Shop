import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Inventory} from './Store/Inventory'
import {Item} from './Store/Item'

let potato = new Item("potato")
let apple = new Item("apple")
let suger = new Item("suger")
let banana = new Item("banana")
let inventoryItems = new Inventory()
inventoryItems.items.push(potato)
inventoryItems.items.push(banana)
inventoryItems.items.push(suger)
inventoryItems.items.push(apple)

ReactDOM.render(<App Store={inventoryItems} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
