import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item'

@observer
class Market extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    addItem=(event)=>{
            if(event.key === 'Enter'){
                this.props.store.addItem(event.target.value)
            }
          
        }
    render(){
        let store = this.props.store
        console.log(store.items)
      return(
        <div>
            <div className="header">Agura Shop:</div>
            <div>
                <input className="input" placeholder="Enter a New Item" onKeyDown={this.addItem}></input>
            </div>
        
                <ul className="items">
                    {store.items.map(m=> <div ><Item item={m} store={store}/></div>)}
                </ul>
         
        </div>
      )
    }

}

export default Market;
