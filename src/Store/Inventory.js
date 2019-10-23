import { observable, action, computed} from 'mobx'
import {Item} from './Item'

export class Inventory{
    @observable items = []
    @observable quantity

    @action addItem=(name, price=0)=>{
        let item = this.items.find(n=> name === n.name)
        if(item){
            item.quantity++
        } 
        else{
            let newItem = new Item(name)
            this.items.push(newItem)
        }
    }
    @action buyItem=(name)=>{
        let item = this.items.find(n=> name === n.name)
        if(item.quantity === 0 ){
        this.items = this.items.filter(m=> m.name !== name)
        } 
        else{
            item.quantity --
        }
    }

    @action changePrice=(name, price)=>{
        let item = this.items.find(n=> n.name === name)
        if(item){
            item.price = price
        }
    }
}