import React, { Component } from 'react';
import { observer } from 'mobx-react'


@observer
class Item extends Component{

    buyItem=(event)=>{
     this.props.store.buyItem(event.target.value)    
     console.log(event.target.value)   
    }
    changePrice=(event)=>{
        let newPrice = prompt("Change The Price", 30)
        this.props.store.changePrice(event.target.id, newPrice)
    }
    render(){
        let item = this.props.item
      return(
        <div className="fas fa-plus" key={item.name} onDoubleClick={this.changePrice} id={item.name}> {item.quantity} {item.name} Availble at $ {item.price} per item <button value={item.name} onClick={this.buyItem}>Buy Item</button> </div>
      )
    }

}

export default Item;
